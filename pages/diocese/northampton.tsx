import React from "react";
import DashboardFooter from "../../components/DashboardFooter";
import NavBar from "../../components/NavBar";
import DiocesePage from "@/components/DiocesePage";

function NorthamptonPage() {
  return (
    <div>
      <NavBar />
      <DiocesePage diocese="Northampton" />
      <DashboardFooter />
    </div>
  );
}

export default NorthamptonPage;
