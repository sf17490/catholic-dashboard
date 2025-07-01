import React from "react";
import DashboardFooter from "../../components/DashboardFooter";
import NavBar from "../../components/NavBar";
import DiocesePage from "@/components/DiocesePage";

function ShrewsburyPage() {
  return (
    <div>
      <NavBar />
      <DiocesePage diocese="Shrewsbury" />
      <DashboardFooter />
    </div>
  );
}

export default ShrewsburyPage;
