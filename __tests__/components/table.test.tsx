import Table, { TableColumns, TableProps } from "@/components/Table";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const dummyTableColumnData: TableColumns = {
  keyColumn: "someKeyColumnHeading",
  valueColumn: "someValueColumnHeading",
};

const dummyTableRowData = [
  { year: 2022, value: 1976 },
  { year: 2021, value: 1537 },
  { year: 2019, value: 2674 },
];

const dummyTableData: TableProps = {
  columns: dummyTableColumnData,
  rows: dummyTableRowData,
};

function makeDummyTableProps(desiredColumns: TableColumns) {
  const dummyTableData: TableProps = {
    columns: desiredColumns,
    rows: dummyTableRowData,
  };
  return dummyTableData;
}

describe("Table - structure & styling", () => {
  it("has a table with the correct class", () => {
    render(<Table {...dummyTableData} />);
    const table = screen.getByTestId("table");
    expect(table).toBeInTheDocument();
    expect(table).toHaveClass("govuk-table");
  });
  it("has a section for column titles", () => {
    render(<Table {...dummyTableData} />);
    expect(screen.getByTestId("columnHeadings")).toBeInTheDocument();
  });
  it("has a section for rows", () => {
    render(<Table {...dummyTableData} />);
    const tableBody = screen.getByTestId("rows");
    expect(tableBody).toBeInTheDocument();
    expect(tableBody).toHaveClass("govuk-table__body");
  });
});

describe("Table columns - structure & styling", () => {
  it("includes a key column", () => {
    render(<Table {...dummyTableData} />);
    const yearColumn = screen.getByTestId("keyColumn");
    expect(yearColumn).toBeInTheDocument();
    expect(yearColumn).toHaveClass("govuk-table__header");
  });
  it("includes a value column", () => {
    render(<Table {...dummyTableData} />);
    const convertsColumn = screen.getByTestId("valueColumn");
    expect(convertsColumn).toBeInTheDocument();
    expect(convertsColumn).toHaveClass("govuk-table__header");
  });
});

describe("Table rows - structure & styling", () => {
  it("creates a row of data with correct styling", () => {
    render(<Table {...dummyTableData} />);
    const row1 = screen.getByTestId("row1");
    expect(row1).toBeInTheDocument();
    expect(row1).toHaveClass("govuk-table__row");
  });
  it("fills in the row of data with the correct styling", () => {
    render(<Table {...dummyTableData} />);
    const row1Key = screen.getByTestId("row1key");
    expect(row1Key).toBeInTheDocument();
    expect(row1Key).toHaveClass("govuk-table__header");

    const row1Value = screen.getByTestId("row1Value");
    expect(row1Value).toBeInTheDocument();
    expect(row1Value).toHaveClass("govuk-table__cell");
  });
});

describe("Fills in the table correctly", () => {
  describe("Fills in the column headings correctly", () => {
    const expectedColumnHeadings: TableColumns[] = [
      { keyColumn: "Year", valueColumn: "Converts to Catholicism" },
      { keyColumn: "Year", valueColumn: "Mass Attendance" },
      { keyColumn: "Some random key", valueColumn: "some Random value" },
    ];

    expectedColumnHeadings.forEach((headingPair) => {
      const props = makeDummyTableProps(headingPair);

      it(`gives the correct heading ${headingPair.keyColumn} to the key column`, () => {
        render(<Table {...props} />);
        expect(screen.getByTestId(`keyColumn`)).toHaveTextContent(
          headingPair.keyColumn
        );
      });

      it(`gives the correct heading ${headingPair.valueColumn} to the value column`, () => {
        render(<Table {...props} />);
        expect(screen.getByTestId(`valueColumn`)).toHaveTextContent(
          headingPair.valueColumn
        );
      });
    });
  });

  describe("Fills in the rows correctly", () => {
    const expectedRowValues = [
      ["row1", "2022", "1976"],
      ["row2", "2021", "1537"],
      ["row3", "2019", "2674"],
    ];

    expectedRowValues.forEach((rowData) => {
      const rowId = rowData[0];
      const expectedKeyText = rowData[1];
      const expectedValueText = rowData[2];
      it(`fills in ${rowId} with the correct data`, () => {
        render(<Table {...dummyTableData} />);
        const row = screen.getByTestId(rowId);

        const key = screen.getByTestId(`${rowId}key`);
        expect(key).toHaveTextContent(expectedKeyText);

        const rowValue = screen.getByTestId(`${rowId}Value`);

        expect(rowValue).toHaveTextContent(expectedValueText);
      });
    });
  });
});
