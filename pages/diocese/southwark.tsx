import React from "react";
import DashboardFooter from "../../components/DashboardFooter";
import NavBar from "../../components/NavBar";
import DiocesePage from "@/components/DiocesePage";

function SouthwarkPage() {
  return (
    <div>
      <NavBar />
      <DiocesePage diocese="Southwark" />
      <DashboardFooter />
    </div>
  );
}

export default SouthwarkPage;
