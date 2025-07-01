import React from "react";
import DashboardFooter from "../../components/DashboardFooter";
import NavBar from "../../components/NavBar";
import DiocesePage from "@/components/DiocesePage";

function SalfordPage() {
  return (
    <div>
      <NavBar />
      <DiocesePage diocese="Salford" />
      <DashboardFooter />
    </div>
  );
}

export default SalfordPage;
