import React from "react";
import DashboardFooter from "../../components/DashboardFooter";
import NavBar from "../../components/NavBar";
import DiocesePage from "@/components/DiocesePage";

function CardiffMeneviaPage() {
  return (
    <div>
      <NavBar />
      <DiocesePage diocese="Cardiff-Menevia" />
      <DashboardFooter />
    </div>
  );
}

export default CardiffMeneviaPage;
