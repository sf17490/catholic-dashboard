import { TopicData } from "@/data/dioceseStats";
import DataDisplayBox from "./DataDisplayBox";

export type TopicSectionProps = {
  topicName: string;
  topicData: TopicData;
  rootTestId: string;
};

function TopicSection({ topicName, topicData, rootTestId }: TopicSectionProps) {
  return (
    <div>
      <h2
        data-testid={`${rootTestId}TopicSectionHeading`}
        className="govuk-heading-l"
      >
        {topicName}
      </h2>
      <strong data-testid={`${rootTestId}AccuracySubheading`}>
        Note on accuracy of data
      </strong>
      <p data-testid={`${rootTestId}Accuracy`}>{topicData.accuracy}</p>
      <DataDisplayBox
        {...{
          rootTestId: rootTestId,
          topic: topicData,
        }}
      />
    </div>
  );
}

export default TopicSection;
