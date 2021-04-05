import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

import image from "./Video/image.jfif";
import Video from './Video/Video';
import { IconButton } from "@material-ui/core";
import { MdStarBorder } from "react-icons/md";

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
