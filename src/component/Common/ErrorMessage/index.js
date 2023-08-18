import React from "react";

const ErrorMessage = ({ error, messages }) => {
  if (!error) return null;
  return (
    <span className="text-danger fs-13">
      {messages[error.type] ? messages[error.type] : "Error in field"}
    </span>
  );
};

export default ErrorMessage;
