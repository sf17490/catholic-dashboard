import React from "react";
import DashboardFooter from "../../components/DashboardFooter";
import NavBar from "../../components/NavBar";
import DiocesePage from "@/components/DiocesePage";

function BirminghamPage() {
  return (
    <div>
      <NavBar />
      <DiocesePage diocese="Birmingham" />
      <DashboardFooter />
    </div>
  );
}

export default BirminghamPage;
