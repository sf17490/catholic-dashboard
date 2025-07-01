import React from "react";
import DashboardFooter from "../../components/DashboardFooter";
import NavBar from "../../components/NavBar";
import DiocesePage from "@/components/DiocesePage";

function HallamPage() {
  return (
    <div>
      <NavBar />
      <DiocesePage diocese="Hallam" />
      <DashboardFooter />
    </div>
  );
}

export default HallamPage;
