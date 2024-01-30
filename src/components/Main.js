import "./Main.css";

import React, { useState } from "react";
import Sidebar from "./Sidebar";

function Main() {
  return (
    <div className="Main">
      <Sidebar></Sidebar>
      <div className="mainHeader">Upload CSV</div>
    </div>
  );
}

export default Main;
