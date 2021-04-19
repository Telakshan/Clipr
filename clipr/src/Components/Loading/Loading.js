import React from "react";

import "./Loading.css";

const Loading = () => {
  return (
    <div className="lds-ring as-overlay grid">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
