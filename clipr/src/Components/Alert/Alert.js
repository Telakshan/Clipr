import React from "react";

import "./Alert.scss";

const Alert = ({ message, alertType }) => {
  return (
    <div className={`alert-container ${alertType}`}>
      <p>{message}</p>
    </div>
  );
};

export default Alert;
