import React from "react";
import VideoList from "../VideoList/VideoList";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <h1>Homepage</h1>
      <VideoList />
    </div>
  );
};

export default Homepage;
