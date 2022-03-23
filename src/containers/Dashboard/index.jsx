import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";
import { SidebarData } from "./SidebarData";


function Dashboard() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className="navbar">
        <Link to="#" className="nav-menu-icon" onClick={showSidebar}>
          <FaIcons.FaBars />
        </Link>
      </div>
      <div className={sidebar ? "sidebar-container active" : "sidebar-container"}>
        <ul className="sidebar-items">
          <li className="sidebar-toggle">
            <Link to="#" className="nav-menu-icon" onClick={showSidebar}>
              <FaIcons.FaWindowClose />
            </Link>
          </li>
          {SidebarData.map((sidebaritem) => {
            return (
              <li
                key={sidebaritem.id}
                className={sidebaritem.cName}
                onClick={showSidebar}
              >
                <Link to={sidebaritem.path}>
                  {sidebaritem.icon}
                  <span>{sidebaritem.title}</span>
                </Link>
                
              </li>
            );
          })}
        </ul>
      </div>
    
      <Outlet />
    </>
  );
}

export default Dashboard;