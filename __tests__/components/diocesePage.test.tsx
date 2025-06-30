import DiocesePage from "@/components/DiocesePage";
import { DioceseDbKey, validDioceseNames } from "@/data/dataTypes";
import { DioceseSimpleDb } from "@/data/dioceseStats";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Diocese page", () => {
  it("includes a page Title", () => {
    render(<DiocesePage diocese="Southwark" />);
    const pageTitle = screen.getByTestId("SouthwarkPageTitle");
    expect(pageTitle).toBeInTheDocument();
    expect(pageTitle).toHaveTextContent("Diocese of Southwark");
  });

  it("includes a citation", () => {
    render(<DiocesePage diocese="Southwark" />);
    const citation = screen.getByTestId("citationText");
    expect(citation).toBeInTheDocument();
  });

  const dioceses: DioceseDbKey[] = [
    "Arundel & Brighton",
    "Birmingham",
    "Brentwood",
    "Clifton",
    "Cardiff-Menevia",
    "East Anglia",
    "Hallam",
    "Hexham & Newcastle",
    "Lancaster",
    "Leeds",
    "Liverpool",
    "Middlesbrough",
    "Northampton",
    "Southwark",
    "Westminster",
  ];
  
  dioceses.forEach((diocese) => {
    it(`has the correct data & formatting for the diocese of ${diocese}`, () => {
      const { asFragment } = render(<DiocesePage diocese={diocese} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it("explains that Cardiff and Menevia were merged in 2024", () => {
    render(<DiocesePage diocese="Cardiff-Menevia" />);

    expect(screen.getByTestId("dioceseNoteHeader")).toBeInTheDocument();

    const dioceseNote = screen.getByTestId("dioceseNote");
    expect(dioceseNote).toHaveTextContent(
      "The Diocese of Cardiff-Menevia was formed on 12 September 2024 when Pope Francis merged the Archdiocese of Cardiff with the Diocese of Menevia. Data prior to this date has been calculated by adding the statistics from Cardiff to the statistics from Menevia. Separate data for each diocese can be found in the Catholicism In Numbers project by the Catholic Record Society."
    );
  });

  it("does not talk about cardiff-Menevia on the other diocese Pages", () => {
    render(<DiocesePage diocese="Birmingham" />);

    expect(screen.getByTestId("maybeDioceseNote")).toHaveTextContent("")
  });
});
