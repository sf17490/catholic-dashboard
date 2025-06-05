import SkeletonChart from "@/components/SkeletonChart";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const dummySkeletonProps = {
  rootTestId: "someTestId",
  heading: "someHeading",
  subheader: "someSubheader",
  href: "someHref",
};

describe("Skeleton Chart", () => {
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

  it("sets the correct outline image for the massAttendance skeleton", () => {
    render(
      <SkeletonChart
        {...{ ...dummySkeletonProps, rootTestId: "massAttendance" }}
      />
    );

    const outline = screen.getByTestId("massAttendanceSkeletonGraph");
    expect(outline).toHaveAttribute(
      "src",
      "images/minimalist_National_Mass_Attendance.png"
    );
  });

  it("sets the correct outline image for the conversions skeleton", () => {
    render(
      <SkeletonChart
        {...{ ...dummySkeletonProps, rootTestId: "conversions" }}
      />
    );

    const outline = screen.getByTestId("conversionsSkeletonGraph");
    expect(outline).toHaveAttribute(
      "src",
      "images/minimalist_National_Conversions.png"
    );
  });

  test.todo(
    "correct the above test to not give every skeleton the same outline"
  );
});
