import React from "react";
import DashboardFooter from "../../components/DashboardFooter";
import NavBar from "../../components/NavBar";
import DiocesePage from "@/components/DiocesePage";

function BrentwoodPage() {
  return (
    <div>
      <NavBar />
      <DiocesePage diocese="Brentwood" />
      <DashboardFooter />
    </div>
  );
}

export default BrentwoodPage;
