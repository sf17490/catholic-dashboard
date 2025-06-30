import DiocesePage from "@/components/DiocesePage";
import { DioceseDbKey } from "@/data/dataTypes";
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

  const dioceses:DioceseDbKey[] = ["Arundel & Brighton","Birmingham","Brentwood","Southwark", "Westminster"]

  dioceses.forEach(diocese => {
    it(`has the correct data & formatting for the diocese of ${diocese}`, ()=>{
      const {asFragment} = render(<DiocesePage diocese={diocese} />)
      expect(asFragment()).toMatchSnapshot();
  })
  })

});
