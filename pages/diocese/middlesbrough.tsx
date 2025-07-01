import React from "react";
import DashboardFooter from "../../components/DashboardFooter";
import NavBar from "../../components/NavBar";
import DiocesePage from "@/components/DiocesePage";

function MiddlesbroughPage() {
  return (
    <div>
      <NavBar />
      <DiocesePage diocese="Middlesbrough" />
      <DashboardFooter />
    </div>
  );
}

export default MiddlesbroughPage;
