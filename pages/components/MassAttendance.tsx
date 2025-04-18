import styles from "../../styles/MassAttendance.module.scss";
import PlotALineGraph from "./PlotALineGraph";

export default function MassAttendance() {
    const yAxisValues = [
        31943, 29429, 29848, 28989, 30233, 30460, 28866, 10030, 17475,
        23226, 26032
      ]
    const xAxisValues = [
        2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023
    ]

  return (
    <div data-testid={"massAttendanceSection"}>
      <h2 role={"heading2"}>Mass Attendance</h2>
      <div className={styles.chartContainer}>
        <div className={styles.chartContents}>
        <h3>Average Sunday Mass Attendance</h3>
        <i role={"contextParagraph"}>
          Average number of people attending Sunday Mass in the Diocese of Nottingham from September 2013. All data is sourced from the Catholic Directory entry for that year. Read more about the sources we use here. 
        </i>
        <div role={"graph"}>
            <PlotALineGraph yAxisLabel="Number attending Mass" yAxisValues={yAxisValues} xAxisLabel="Year" xAxisValues={xAxisValues}/>
        </div>
      </div>
      </div>
    </div>
  );
}
