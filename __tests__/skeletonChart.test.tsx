import SkeletonChart from "@/pages/components/SkeletonChart";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Make a chart", () => {
  it("correctly renders a heading", () => {
    render(<SkeletonChart />)
    const heading = screen.getByRole("skeletonHeader");

    expect(heading).toBeInTheDocument();
  });

  it("correctly renders a subheading", () => {
    render(<SkeletonChart />)
    const subheading = screen.getByRole("skeletonSubheader");

    expect(subheading).toBeInTheDocument();
  });

  it("has a skeleton graph outline", ()=>{
    render(<SkeletonChart />)
    const skeletonSection = screen.getByTestId("skeletonGraph")

    expect(skeletonSection).toBeInTheDocument()
  })

  it("provides a link to Mass Attendance section", ()=>{
    render(<SkeletonChart />)

    expect(screen.getByTestId("massAttendanceLink")).toBeInTheDocument

  })
});
