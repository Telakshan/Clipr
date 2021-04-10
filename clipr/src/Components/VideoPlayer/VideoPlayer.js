import React from "react";
import {AiOutlineLike} from 'react-icons/ai';
import {AiOutlineDislike} from 'react-icons/ai';
import "./VideoPlayer.scss";

const VideoPlayer = () => {
  const embedUrl = "https://www.youtube.com/watch?v=ysz5S6PUM-U";
  return (
      <div className="video-content">
        <iframe
          src="https://www.youtube.com/embed/JEiEFhaMVVA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className='video-player'
        ></iframe>
        {/* <React.Fragment className='buttons'>
            <button type='button' className='like'>
                <AiOutlineLike/>
            </button>
            <button type='button' className='unlike'>
                <AiOutlineDislike/>
            </button>
        </React.Fragment> */}
      </div>
  );
};

export default VideoPlayer;
