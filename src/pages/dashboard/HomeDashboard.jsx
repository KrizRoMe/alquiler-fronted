import React from "react";
import { Outlet } from "react-router-dom";

function HomeDashboard() {
  return (
    <div>
      <h1>NAV</h1>
      <Outlet />
      <h2>ASIDE</h2>
    </div>
  );
}

export default HomeDashboard;
