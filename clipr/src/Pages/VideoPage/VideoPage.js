import React, { useState } from "react";
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";
import Comment from "../../Components/Comment/Comment";
import CommentForm from "../../Components/Comment/CommentForm";
import Button from "../../Components/Button/Button";

import "./VideoPage.scss";
import { Link } from "react-router-dom";

const VideoPage = () => {
  const [comment, addComment] = useState(false);

  return (
    <div className="video-page">
      <VideoPlayer />
      {comment ? (
        <>
          <CommentForm />
        </>
      ) : null}
      <p to="#" className="comment-action" onClick={() => addComment(!comment)}>
        {comment ? "Cancel" : "Add a comment..."}
      </p>

      <Comment className="comments" />
    </div>
  );
};

export default VideoPage;
