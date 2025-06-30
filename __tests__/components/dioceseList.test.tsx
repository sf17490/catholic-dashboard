import DioceseList from "@/components/DioceseList";
import {
  CleanedDioceseName,
  DioceseName,
} from "@/data/dataTypes";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Diocese List", () => {
  it("has a list", () => {
    render(<DioceseList />);
    const dioceseList = screen.getByTestId("dioceseList");
    expect(dioceseList).toBeInTheDocument();
    expect(dioceseList).toHaveClass("govuk-list govuk-list--bullet");
  });

  const dioceses: [DioceseName, CleanedDioceseName][] = [
    ["Arundel & Brighton", "arundel_and_brighton"],
    ["Birmingham", "birmingham"],
    ["Brentwood", "brentwood"],
    ["Cardiff-Menevia", "cardiff-menevia"],
    ["Clifton", "clifton"],
    ["East Anglia", "east_anglia"],
    ["Hallam", "hallam"],
    ["Hexham & Newcastle", "hexham_and_newcastle"],
    ["Lancaster", "lancaster"],
    ["Leeds", "leeds"],
    ["Liverpool", "liverpool"],
    ["Middlesbrough", "middlesbrough"],
    ["Northampton", "northampton"],
    ["Nottingham", "nottingham"],
    ["Plymouth", "plymouth"],
    ["Portsmouth", "portsmouth"],
    ["Salford", "salford"],
    ["Shrewsbury", "shrewsbury"],
    ["Southwark", "southwark"],
    ["Westminster", "westminster"],
    ["Wrexham", "wrexham"],
  ];

  dioceses.forEach((data) => {
    const dioceseName = data[0];
    const cleanedDioceseName = data[1];
    it(`includes ${dioceseName} in the list`, () => {
      render(<DioceseList />);

      const dioceseBullet = screen.getByTestId(`${cleanedDioceseName}Bullet`);
      expect(dioceseBullet).toBeInTheDocument();
    });

    it(`links to ${dioceseName}`, () => {
      render(<DioceseList />);

      const dioceseLink = screen.getByTestId(`${cleanedDioceseName}Link`);
      expect(dioceseLink).toBeInTheDocument();
      expect(dioceseLink).toHaveAttribute(
        "href",
        `/diocese/${cleanedDioceseName}`
      );
      expect(dioceseLink).toHaveClass("govuk-link--no-visited-state");
      expect(dioceseLink).toHaveTextContent(dioceseName.toString());
    });
  });
});
