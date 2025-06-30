import React from "react";
import DashboardFooter from "../../components/DashboardFooter";
import NavBar from "../../components/NavBar";
import DiocesePage from "@/components/DiocesePage";

function EastAngliaPage() {
  return (
    <div>
      <NavBar />
      <DiocesePage diocese="East Anglia" />
      <DashboardFooter />
    </div>
  );
}

export default EastAngliaPage;
