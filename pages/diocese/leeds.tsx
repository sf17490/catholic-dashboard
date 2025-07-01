import React from "react";
import DashboardFooter from "../../components/DashboardFooter";
import NavBar from "../../components/NavBar";
import DiocesePage from "@/components/DiocesePage";

function LeedsPage() {
  return (
    <div>
      <NavBar />
      <DiocesePage diocese="Leeds" />
      <DashboardFooter />
    </div>
  );
}

export default LeedsPage;
