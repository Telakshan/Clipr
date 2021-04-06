import React from "react";
import image from "./Video/image.jfif";
import Video from './Video/Video';

import "./VideoList.scss";

const titleData = [
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  ,
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  },
  {
    img: image,
    title: "image",
  }
];

const VideoList = () => {
  return (
    <div className="video-list">
      <div className="video-element">
        {titleData.map((tile) => (
          <Video image={tile.img} key={tile} className='video-preview'/>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
