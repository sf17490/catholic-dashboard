import React from "react";
import DashboardFooter from "../../components/DashboardFooter";
import NavBar from "../../components/NavBar";
import DiocesePage from "@/components/DiocesePage";

function HexhamAndNewcastlePage() {
  return (
    <div>
      <NavBar />
      <DiocesePage diocese="Hexham & Newcastle" />
      <DashboardFooter />
    </div>
  );
}

export default HexhamAndNewcastlePage;
