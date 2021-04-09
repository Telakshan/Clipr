import React from "react";

import "./VideoPlayer.scss";

const VideoPlayer = () => {
  const embedUrl = "https://www.youtube.com/watch?v=ysz5S6PUM-U";
  return (
    <div className="video-container">
      <div className="video-content">
        <iframe
          src="https://www.youtube.com/embed/JEiEFhaMVVA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className='video-player'
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
