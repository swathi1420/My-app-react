import React, { useState } from "react";

import "./Dashboard.css";
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "./SidebarData";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import LoginButton from "../../components/Button";
import Home from "../Display/Home";
import About from "../Display/About";
import Contact from "../Display/Contact";

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
      {/* <>
      <BrowserRouter>
    
    <Switch>
    
      <Route path="/dashboard/menu1" exact component={Home}></Route>
      <Route path="/dashboard/menu2" exact component={About}></Route>
      <Route path="/dashboard/menu3" exact component={Contact}></Route>
    </Switch>
    </BrowserRouter>
      </>  */}
    </>
  );
}

export default Dashboard;