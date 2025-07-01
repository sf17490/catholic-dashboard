import React from "react";
import DashboardFooter from "../../components/DashboardFooter";
import NavBar from "../../components/NavBar";
import DiocesePage from "@/components/DiocesePage";

function LiverpoolPage() {
  return (
    <div>
      <NavBar />
      <DiocesePage diocese="Liverpool" />
      <DashboardFooter />
    </div>
  );
}

export default LiverpoolPage;
