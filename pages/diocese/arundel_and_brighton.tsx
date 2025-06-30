import React from "react";
import DashboardFooter from "../../components/DashboardFooter";
import NavBar from "../../components/NavBar";
import DiocesePage from "@/components/DiocesePage";

function ArundelAndBrightonPage() {
  return (
    <div>
      <NavBar />
      <DiocesePage diocese="Arundel & Brighton" />
      <DashboardFooter />
    </div>
  );
}

export default ArundelAndBrightonPage;
