import SkeletonChart from "@/pages/components/SkeletonChart";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const dummySkeletonProps = {
    rootTestId: "someTestId",
  heading: "someHeading",
  subheader: "someSubheader"
}

describe("Make a chart", () => {
  it("correctly renders a heading", () => {
    render(<SkeletonChart {...dummySkeletonProps}/>)
    const heading = screen.getByRole("skeletonHeader");

    expect(heading).toBeInTheDocument();
  });

  it("correctly renders a subheading", () => {
    render(<SkeletonChart {...dummySkeletonProps} />)
    const subheading = screen.getByRole("skeletonSubheader");

    expect(subheading).toBeInTheDocument();
  });

  it("has a skeleton graph outline", ()=>{
    render(<SkeletonChart {...dummySkeletonProps}/>)
    const skeletonSection = screen.getByTestId("skeletonGraph")

    expect(skeletonSection).toBeInTheDocument()
  })

  it("provides a link to Mass Attendance section", ()=>{
    render(<SkeletonChart {...dummySkeletonProps}/>)

    expect(screen.getByTestId("someTestIdLink")).toBeInTheDocument

  })
});
