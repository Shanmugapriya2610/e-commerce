import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { sideBarData } from "helpers/constant";
import classes from "./styles.module.scss";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className={classes.container}>
      {sideBarData.map((menu, index) => {
        return (
          <NavLink key={index} to={menu.to} className={`${classes.navLink}`}>
            <p
              className={
                location.pathname.includes(menu.to)
                  ? classes.active
                  : classes.navItem
              }
            >
              <img src={menu.image} alt={menu.label} className="pe-3" />
              {menu.label}
            </p>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;
