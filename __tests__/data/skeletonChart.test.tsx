import SkeletonChart from "@/pages/components/SkeletonChart";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Make a chart", () => {
  it("correctly renders a heading", () => {
    render(<SkeletonChart />)
    const heading = screen.getByRole("skeletonHeader");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("govuk-heading-l govuk-!-margin-bottom-4")
  });

  it("correctly renders a subheading", () => {
    render(<SkeletonChart />)
    const subheading = screen.getByRole("skeletonSubheader");

    expect(subheading).toBeInTheDocument();
    expect(subheading).toHaveClass("govuk-body-s mb-3 text-grey-1")

  });

  it("correctly formats text elemtns", () => {
        render(<SkeletonChart />)
        const context = screen.getByTestId("context")

        expect(context).toHaveClass("text")
  })

  it("gives the skeleton chart the correct background colour", ()=>{
    render(<SkeletonChart />)
    const skeletonSection = screen.getByTestId("skeleton")

    expect(skeletonSection).toHaveClass("chartContainer")
  })

  it("has a skeleton graph outline", ()=>{
    render(<SkeletonChart />)
    const skeletonSection = screen.getByTestId("skeletonGraph")

    expect(skeletonSection).toBeInTheDocument()
  })
});
