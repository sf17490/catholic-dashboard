import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import massAttendance from "@/pages/massAttendance";

describe("Mass Attendance page", () => {
  it("includes a header", () => {
    render(<massAttendance />);
    expect(screen.getByTestId("headerSection")).toBeInTheDocument;
  });

  it("includes a footer", () => {
    render(<massAttendance />);
    expect(screen.getByTestId("footing")).toBeInTheDocument;
  });

  it("has the correct title", () => {
    render(<massAttendance />);
    expect(screen.getByTestId("massAttendancePageTitle")).toHaveTextContent(
      "Mass Attendance"
    );
  });

  it('includes a "Mass Attendance" component', async () => {
    render(<massAttendance />);

    const massAttendanceSection = await screen.findByTestId(
      "massAttendanceChart"
    );

    await expect(massAttendanceSection).toBeInTheDocument();
  });
});
