import React from "react";

import "./Video.scss";

const Video = ({image}) => {
  return (
    <div className="video">
      <img src={image} />
      <p>10:00</p>
      <p>Nice day at the park</p>
    </div>
  );
};

export default Video;
