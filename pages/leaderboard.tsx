import React from "react";
import NavBar from "@/components/NavBar";
import DashboardFooter from "@/components/DashboardFooter";

function Leaderboard() {
  return (
    <div>
      <NavBar />
      <div className="m-10">
        <h1 className="govuk-heading-xl"> Leaderboard </h1>
        <div data-testid="citation">
          <b>Citation</b>
          <p data-testid="citationText">
            The data on this page is calculated from the 2022 data in{"  "}
            <i>
              <a
                data-testid="citationLink"
                className="govuk-link"
                href="https://www.crs.org.uk/catholicism-in-numbers"
              >
                Catholicism in Numbers
              </a>
            </i>
            , a project by the Catholic Record Society.
          </p>
        </div>
        <div>
          <b>Understanding this table</b>
          <p>
            You can think of this table as measuring "Converts per capita".{" "}
          </p>
          <p>
            For the purposes of this leaderboard, "practising Catholic" is defined as a person who fulfils their
            Sunday Mass obligation.{" "}
          </p>
          <p>
            Each diocese is then ranked by the number of converts they are
            making per "practising" Catholic.
          </p>
          <b>Methodology</b>
          <p>
            For example, in 2022 in the Diocese of Hexham & Newcastle, 17,991
            people attended Mass on a typical Sunday, and 146 people were
            received into the church that year. 17,991 divided by 146 is 123. It
            therefore "takes" 123 Catholics practising their faith in order to
            convert one person.
          </p>
          <p>
            In contrast, in the Diocese of Northampton, it takes 548 Catholics
            practising their faith to convert one person.
          </p>
        </div>
        <div data-testid="dataDisplayBox" className="bg-[var(--colour-grey-3)]">
          <div
            data-testid="dataDisplayBoxContents"
            className="m-6 pt-2 pb-0.25"
          >
            <div>
              <div>{LeaderboardTable()}</div>
            </div>
          </div>
        </div>
        <div>
          <b>Limitations of this data</b>
          <p>
            This table should be interpreted with great caution. Please bear the
            following points in mind:
          </p>
          <ul className="govuk-list govuk-list--bullet">
            <li>
              This table only considers data from the most recent year available
              (2022). It is possible that a diocese's ranking would change
              significantly if a different year was chosen.
            </li>
            <li>
              This ranking only considers receptions into the church -{" "}
              <b>it does not include adult baptisms</b>. It is possible that a
              diocese's ranking would change significantly when converts from
              non-Christian backgrounds are included.
            </li>
          </ul>
          <p>
            Despite these limits we have published the ranking above in the
            belief that any measurement is better than no measurement at all.
          </p>
        </div>
      </div>
      <DashboardFooter />
    </div>
  );
}

export default Leaderboard;

function LeaderboardTable() {
  return (
    <table data-testid="table" className="govuk-table max-h-22">
      <caption className="govuk-table__caption govuk-table__caption--m">
        Dioceses Ranked by Conversion Rate (2022)
      </caption>

      {columnHeadings(["Rank", "Diocese", "Practising Catholics per Convert"])}
      {fillInRows([
        ["1", "Hexham & Newcastle", "123"],
        ["2", "Birmingham", "158"],
        ["3", "Middlesbrough", "174"],
        ["4", "Liverpool", "184"],
        ["5", "Salford", "187"],
        ["6", "Cardiff", "221"], //Menevia?
        ["7", "Hallam", "225"],
        ["8", "Shrewsbury", "232"],
        ["9", "Plymouth", "240"],
        ["10", "Leeds", "255"],
        ["11", "Wrexham", "264"],
        ["12", "East Anglia", "269"],
        ["13", "Arundel & Brighton", "274"],
        ["14", "Brentwood", "277"],
        ["15", "Clifton", "278"],
        ["16", "Southwark", "278"],
        ["17", "Nottingham", "280"],
        ["18", "Lancaster", "323"],
        ["19", "Portsmouth", "381"],
        ["20", "Westminster", "397"],
        ["21", "Menevia", "422"], //Cardiff?
        ["22", "Northampton", "548"],
        //Wrexham??
      ])}
    </table>
  );
}

function columnHeadings(headings: string[]) {
  return (
    <thead data-testid="columnHeadings" className="govuk-table__head">
      <tr className="govuk-table__row sticky-top-0">
        {headings.map((heading, index) => {
          return (
            <th
              scope="col"
              data-testid={`column${index}heading`}
              className="govuk-table__header"
              key={index}
            >
              {heading}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

function fillInRows(rowData: string[][]) {
  return (
    <tbody>
      {rowData.map((dataForSingleRow) => {
        return (
          <tr className="govuk-table__row">
            {dataForSingleRow.map((tableCell, index) => {
              return (
                <td className="govuk-table__cell" key={index}>
                  {tableCell}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
}
