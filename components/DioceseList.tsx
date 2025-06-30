import { cleanedDioceseNames, validDioceseNames } from "@/data/dataTypes";
import Link from "next/link";
import React from "react";

function DioceseList() {
  const dioceses = validDioceseNames.map((dioceseName, i) => [
    dioceseName,
    cleanedDioceseNames[i],
  ]);

  return (
    <div>
      <ul data-testid="dioceseList" className="govuk-list govuk-list--bullet">
        {dioceses.map((pair) => {
          const dioceseName = pair[0];
          const cleanedDioceseName = pair[1];
          return (
            <li data-testId={`${cleanedDioceseName}Bullet`}>
              <Link
                data-testid={`${cleanedDioceseName}Link`}
                href={`/diocese/${cleanedDioceseName}`}
                className="govuk-link--no-visited-state"
              >
                {dioceseName}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DioceseList;
