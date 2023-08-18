import React from "react";
import "./textarea.scss";
const TextArea = ({
  label,
  name,
  value,
  register = {},
  rows,
  cols,
  loginInputBox,
  placeholder,
}) => {
  return (
    <div>
      <label className="inputLabel">{label}</label>
      <textarea
        className="normaltextarea"
        name={name}
        defaultValue={value}
        ref={register}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextArea;
