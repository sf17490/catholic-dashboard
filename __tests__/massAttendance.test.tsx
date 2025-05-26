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

  it("inlcudes a section breaking down the statistics by Diocese", ()=>{
    render(<MassAttendance />);

    const diocesesSection = screen.getByTestId("massAttendanceByDioceseSection")

    expect(diocesesSection).toBeInTheDocument();
  })
});
