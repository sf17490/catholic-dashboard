import React from "react";
import DashboardFooter from "../../components/DashboardFooter";
import NavBar from "../../components/NavBar";
import DiocesePage from "@/components/DiocesePage";

function WrexhamPage() {
  return (
    <div>
      <NavBar />
      <DiocesePage diocese="Wrexham" />
      <DashboardFooter />
    </div>
  );
}

export default WrexhamPage;
