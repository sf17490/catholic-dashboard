import SkeletonChart from "@/pages/components/SkeletonChart";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const dummySkeletonProps = {
  rootTestId: "someTestId",
  heading: "someHeading",
  subheader: "someSubheader",
};

describe("Make a chart", () => {
  it("correctly renders a heading", () => {
    render(<SkeletonChart {...dummySkeletonProps} />);
    const heading = screen.getByRole("skeletonHeader");

    expect(heading).toBeInTheDocument();
  });

  it("correctly renders a subheading", () => {
    render(<SkeletonChart {...dummySkeletonProps} />);
    const subheading = screen.getByRole("skeletonSubheader");

    expect(subheading).toBeInTheDocument();
  });

  it("provides a link to the correct section", () => {
    render(<SkeletonChart {...dummySkeletonProps} />);

    expect(screen.getByTestId("someTestIdLink")).toBeInTheDocument;
  });

  it("has a skeleton graph outline", () => {
    render(<SkeletonChart {...dummySkeletonProps} />);
    const skeletonSection = screen.getByTestId("skeletonGraph");

    expect(skeletonSection).toBeInTheDocument();
  });

  it("uses the national Mass Attendance outline (for now)", () => {
    render(<SkeletonChart {...dummySkeletonProps} />);

    const outline = screen.getByTestId("skeletonGraph");
    expect(outline).toHaveAttribute(
      "src",
      "/images/minimalist_National_Mass_Attendance.png"
    );
  });

  test.todo(
    "correct the above test to not give every skeleton the same outline"
  );
});
