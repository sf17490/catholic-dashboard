jest.mock("@/components/DataDisplayBox", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="mocked-data-display-box" />),
}));

import DataDisplayBox, { DisplayBoxProps } from "@/components/DataDisplayBox";
const mockedDataDisplayBox = mocked(DataDisplayBox);
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { mocked } from "jest-mock";
import TopicSection, { TopicSectionProps } from "@/components/TopicSection";

const dummyProps: TopicSectionProps = {
  topicName: "An important topic",
  rootTestId: "blah",
  dioceseDataKey: "westminsterMassAttendance",
};

describe("Topic Section", () => {
  it("has the correct heading", () => {
    render(<TopicSection {...dummyProps} />);
    const topicSectionHeading = screen.getByTestId("blahTopicSectionHeading");
    expect(topicSectionHeading).toBeInTheDocument();
    expect(topicSectionHeading).toHaveClass("govuk-heading-l");
    expect(topicSectionHeading).toHaveTextContent("An important topic");
  });

  it("has an accuracy subheading", () => {
    render(<TopicSection {...dummyProps} />);
    const accuracySubheading = screen.getByTestId("blahAccuracySubheading");
    expect(accuracySubheading).toBeInTheDocument();
    expect(accuracySubheading).toHaveTextContent("Note on accuracy of data");
  });

  it("has the correct accuracy statement", () => {
    render(<TopicSection {...dummyProps} />);
    const accuracyStatement = screen.getByTestId("blahAccuracy");
    expect(accuracyStatement).toBeInTheDocument();
    expect(accuracyStatement).toHaveTextContent(
      "The accuracy with which attendance is counted may vary. A person may accidentally be counted twice and figures may overstate or understate where an estimate is required, such as at very large services or if mechanical means of counting fail. Additionally, approaches to counting may vary across churches in a diocese or nation."
    );
  });

  it("gives the data-display box the correct props", async () => {
    render(<TopicSection {...dummyProps} />);

    const expectedDisplayBoxProps = {
      rootTestId: "blah",
      dioceseDataKey: "westminsterMassAttendance",
    };

    const calls = mockedDataDisplayBox.mock.calls;
    const match = calls.find(
      ([props]) =>
        JSON.stringify(props) === JSON.stringify(expectedDisplayBoxProps)
    );

    expect(match).toBeTruthy();
  });
});
