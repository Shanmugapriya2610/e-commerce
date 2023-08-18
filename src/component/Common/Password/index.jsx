import React, { useState } from "react";
import { icons } from "helpers/images";
import classes from "./Password.module.scss";

const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const { name, register, placeholder, disabled, label = "" } = props;

  return (
    <div className={classes.passwordBox}>
      {label !== "" && <label className={classes.inputLabel}>{label}</label>}
      <img
        alt="eye"
        className={`verticalAlign ${classes.icons}`}
        src={icons.key}
      />
      <input
        type={showPassword ? "text" : "password"}
        ref={register}
        name={name}
        placeholder={placeholder}
        className={`${classes.inputBoxStyle} ${
          disabled ? "cursor-not-allowed" : ""
        }`}
      />

      <img
        alt="eye"
        className={`verticalAlign ${classes.passwordIcon}`}
        src={showPassword ? icons.eyeOpen : icons.eyeClosed}
        onClick={() => setShowPassword(!showPassword)}
      />
    </div>
  );
};

export default PasswordInput;
