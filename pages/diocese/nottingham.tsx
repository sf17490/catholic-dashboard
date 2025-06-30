import React from "react";
import DashboardFooter from "../../components/DashboardFooter";
import NavBar from "../../components/NavBar";
import DiocesePage from "@/components/DiocesePage";

function NottinghamPage() {
  return (
    <div>
      <NavBar />
      <DiocesePage diocese="Nottingham" />
      <DashboardFooter />
    </div>
  );
}

export default NottinghamPage;
