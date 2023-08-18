import { images } from "helpers/images";
import React from "react";
import classes from "./styles.module.scss";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <img src={images.logo} alt="logo" className={classes.logo} />
    </div>
  );
};

export default Navbar;
