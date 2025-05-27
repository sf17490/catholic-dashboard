import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import MassAttendanceByDiocese from "@/pages/components/MassAttendanceByDiocese";

describe("Mass Attendance by Diocese component", () => {
  it("has the subheading 'Mass Attendance by Diocese'", () => {
    render(<MassAttendanceByDiocese />);

    expect(screen.getByTestId("DioceseMAHeader")).toBeInTheDocument();
  });

  it("includes a graph displaying this data", async ()=>{
    render(<MassAttendanceByDiocese />)

    const chart = await screen.findByTestId("MAByDioceseChart")

   expect(chart).toBeInTheDocument();
  })
});
