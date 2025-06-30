import React from "react";
import DashboardFooter from "../../components/DashboardFooter";
import NavBar from "../../components/NavBar";
import DiocesePage from "@/components/DiocesePage";

function CliftonPage() {
  return (
    <div>
      <NavBar />
      <DiocesePage diocese="Clifton" />
      <DashboardFooter />
    </div>
  );
}

export default CliftonPage;
