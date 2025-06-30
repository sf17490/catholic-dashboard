import React from "react";
import DashboardFooter from "../../components/DashboardFooter";
import NavBar from "../../components/NavBar";
import DiocesePage from "@/components/DiocesePage";

function LancasterPage() {
  return (
    <div>
      <NavBar />
      <DiocesePage diocese="Lancaster" />
      <DashboardFooter />
    </div>
  );
}

export default LancasterPage;
