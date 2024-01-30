import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="sidebarHeader">
        <div className="sidebarLogo"></div>
        <div className="sidebarHeaderTitle">Base</div>
      </div>
      <div className="sidebarItems">
        <div className="sidebarItem">
          <div className="sidebarItemIcon dashboardIcon"></div>
          <div className="sidebarItemTitle">Dashboard</div>
        </div>
        <div className="sidebarItem">
          <div className="sidebarItemIcon uploadIcon"></div>
          <div className="sidebarItemTitle uploadTitle">Upload</div>
        </div>
        <div className="sidebarItem">
          <div className="sidebarItemIcon invoiceIcon"></div>
          <div className="sidebarItemTitle">Invoice</div>
        </div>
        <div className="sidebarItem">
          <div className="sidebarItemIcon scheduleIcon"></div>
          <div className="sidebarItemTitle">Schedule</div>
        </div>
        <div className="sidebarItem">
          <div className="sidebarItemIcon calendarIcon"></div>
          <div className="sidebarItemTitle">Calendar</div>
        </div>
        <div className="sidebarItem">
          <div className="sidebarItemIcon notificationIcon"></div>
          <div className="sidebarItemTitle">Notification</div>
        </div>
        <div className="sidebarItem">
          <div className="sidebarItemIcon settingsIcon"></div>
          <div className="sidebarItemTitle">Settings</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
