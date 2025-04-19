import styles from "../styles/Home.module.scss";
import dynamic from "next/dynamic";
import DashboardFooter from "./components/DashboardFooter";

import("@/pages/components/MassAttendance");

const DynamicMassAttendance = dynamic(() => import("@/pages/components/MassAttendance"),{
  ssr: false
}
)

const DynamicDiocesesMap = dynamic(()=> import("@/pages/components/DiocesesMap"), {
  ssr:false
})

export default function Home() {
  console.log("Ora pro nobis, Carlo")
  return (
    <div>
      <div data-testid={"headerDiv"} className={styles.fullWidthHeader}>
        <h1 role={"heading"}>UK Catholic Data Dashboard</h1>
        <h2 role={"subheading"}>
          Showing Catholic data across England & Wales
        </h2>
        <p role={"betaNotice"}className={styles.para}> <strong className={"govuk-tag govuk-phase-banner__content__tag "}>Beta</strong>This is a new service - your feedback will help us to improve it.</p>
      </div>
      <div role={"body"} className={styles.marginalisedBody}>
        <DynamicMassAttendance />
      </div>
      <div data-testid={"mapDiv"} className={styles.marginalisedBody}>
        < DynamicDiocesesMap />
      </div>
      < DashboardFooter />
    </div>
  );
}
