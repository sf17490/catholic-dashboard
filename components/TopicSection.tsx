import { getDioceseData } from "@/data/dioceseStats";
import { DioceseDbKey } from "@/data/enums";
import DataDisplayBox from "./DataDisplayBox";

export type TopicSectionProps = {
  topicName: string;
  dioceseDataKey: DioceseDbKey;
  rootTestId: string;
};

function TopicSection({
  topicName,
  dioceseDataKey,
  rootTestId,
}: TopicSectionProps) {
  const accuracyStatement = getDioceseData(dioceseDataKey).accuracy;
  return (
    <div>
      <h2
        data-testId={`${rootTestId}TopicSectionHeading`}
        className="govuk-heading-l"
      >
        {topicName}
      </h2>
      <strong data-testId={`${rootTestId}AccuracySubheading`}>
        Note on accuracy of data
      </strong>
      <p data-testId={`${rootTestId}Accuracy`}>{accuracyStatement}</p>
      <DataDisplayBox
        {...{ rootTestId: rootTestId, dioceseDataKey: dioceseDataKey }}
      />
    </div>
  );
}

export default TopicSection;
