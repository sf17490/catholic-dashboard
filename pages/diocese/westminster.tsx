import React from "react";
import DashboardFooter from "../../components/DashboardFooter";
import NavBar from "../../components/NavBar";
import DiocesePage from "@/components/DiocesePage";

function WestminsterPage() {
  return (
    <div>
      <NavBar />
      <DiocesePage diocese="Westminster" />
      <DashboardFooter />
    </div>
  );
}

export default WestminsterPage;
