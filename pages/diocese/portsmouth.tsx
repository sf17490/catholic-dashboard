import React from "react";
import DashboardFooter from "../../components/DashboardFooter";
import NavBar from "../../components/NavBar";
import DiocesePage from "@/components/DiocesePage";

function PortsmouthPage() {
  return (
    <div>
      <NavBar />
      <DiocesePage diocese="Portsmouth" />
      <DashboardFooter />
    </div>
  );
}

export default PortsmouthPage;
