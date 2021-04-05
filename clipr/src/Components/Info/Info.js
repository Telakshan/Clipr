import React from "react";
import { Link } from "react-router-dom";
import { BsCameraVideo } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { GoComment } from "react-icons/go";

import Button from "../Button/Button";

import "./Info.scss";

const Info = () => {
  return (
    <div className="page">
      <div className="landing">
        <h1>Welcome to Clipr</h1>

        <h3>
          Share your Original content with your family, friends or the entire
          World
        </h3>

        <Button>
          <Link to="/register">Get Started</Link>
        </Button>
      </div>
      <div className="info-section">
        <div className="card">
        <BsCameraVideo className="connect" />
          <h3>Show your creativity to the world</h3>
          <p>
            <AiFillCheckCircle className="check" />
            New and upcoming platform for video discovery and exploration.
          </p>
        </div>

        <div className="card">
          <GoComment className="connect" />
          <h3>Share your thoughts about user submissions.</h3>
          <p>
            <AiFillCheckCircle className="check" />
            Effortlessly connect with fellow Cliprs' and share your insite on videos.
          </p>
        </div>

        <div className="card">
          <FaTasks className="connect" />
          <h3>More features to come</h3>
          <p>
            <AiFillCheckCircle className="check" />
            We are continuosly improving the platform and there are many features yet to come.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
