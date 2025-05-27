import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import MassAttendance from "@/pages/massAttendance";
import Conversions from "@/pages/conversions";

describe("Mass Attendance page", () => {
  it("includes a header", () => {
    render(<Conversions />);
    expect(screen.getByTestId("headerSection")).toBeInTheDocument;
  });

  it("includes a footer", () => {
    render(<Conversions />);
    expect(screen.getByTestId("footing")).toBeInTheDocument;
  });

  it("has the correct title", () => {
    render(<Conversions />);
    expect(screen.getByTestId("massAttendancePageTitle")).toHaveTextContent(
      "Conversions"
    );
  });

  //TODO: this test 
//   test('includes a "Conversions" component', async () => {
//     render(<Conversions />);

//     const massAttendanceSection = await screen.findByTestId("conversionsChart");

//     await expect(massAttendanceSection).toBeInTheDocument();
//   });
});
