import React from "react";
import DashboardFooter from "../../components/DashboardFooter";
import NavBar from "../../components/NavBar";
import DiocesePage from "@/components/DiocesePage";

function PlymouthPage() {
  return (
    <div>
      <NavBar />
      <DiocesePage diocese="Plymouth" />
      <DashboardFooter />
    </div>
  );
}

export default PlymouthPage;
