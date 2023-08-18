import React from "react";
import { images } from "helpers/images";
import classes from "./styles.module.scss";

export const AuthLayout = (props) => {
  return (
    <div className="row w-100">
      <div className={`${classes.authbg} col-6`} />
      <div className="col-6">
        <div className={classes.container}>
          <img src={images.logo} alt="logo" />
          {props.children}
        </div>
      </div>
    </div>
  );
};
