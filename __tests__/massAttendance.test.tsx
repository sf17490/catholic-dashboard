import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import MassAttendance from "@/pages/massAttendance";

describe("Mass Attendance page", () => {
  it("includes a header", () => {
    render(<MassAttendance />);
    expect(screen.getByTestId("headerSection")).toBeInTheDocument;
  });

  it("includes a footer", () => {
    render(<MassAttendance />);
    expect(screen.getByTestId("footing")).toBeInTheDocument;
  });

  it("has the correct title", () => {
    render(<MassAttendance />);
    expect(screen.getByTestId("massAttendancePageTitle")).toHaveTextContent(
      "Mass Attendance"
    );
  });

  it('includes a "Mass Attendance" component', async () => {
    render(<MassAttendance />);

    const massAttendanceSection = await screen.findByTestId(
      "massAttendanceChart"
    );

    await expect(massAttendanceSection).toBeInTheDocument();
  });

  it("cites the Catholic Record Society", async () => {
    render(<MassAttendance />);

    expect(screen.getByTestId("citation")).toBeInTheDocument();
    expect(screen.getByTestId("citationText")).toHaveTextContent(
      "The data on this page comes from Catholicism in Numbers, a project by the Catholic Record Society."
    );
    expect(screen.getByTestId("citationLink")).toHaveAttribute(
      "href",
      "https://www.crs.org.uk/catholicism-in-numbers"
    );
    expect(screen.getByTestId("citationLink")).toHaveClass("govuk-link");
  });
});
