import React from "react";
import './ErrorMessage.scss'
const FormErrorMessage = ({ error, type, messages }) => {
  if (!error) return null;

  return (
    <span className="text-danger form-error">
      {messages[error.type] ? messages[error.type] : "Error in field"}
    </span>
  );
};
export default FormErrorMessage;
