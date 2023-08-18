import React from "react";
import classes from "./InputBox.module.scss";

const InputBox = (props) => {
  let {
    placeholder = "",
    disabled,
    value = "",
    type = "text",
    name = "",
    maxlength = "",
    label = "",
    register,
  } = props;
  return (
    <>
      {label !== "" && <label className={classes.inputLabel}>{label}</label>}
      <input
        ref={register}
        name={name}
        placeholder={placeholder}
        className={`${classes.inputBoxStyle} ${
          disabled ? "cursor-not-allowed" : ""
        }`}
        disabled={disabled}
        defaultValue={value}
        type={type}
        maxLength={maxlength}
      />
    </>
  );
};
export default InputBox;
