import React, { useState } from "react";
import Button from "../Button/Button";

import './CommentForm.scss';

const CommentForm = () => {
  const [text, setText] = useState("");

  return (
    <div className="comment-form">
      <form className="comment-text">
        <textarea
          className="text-area"
          name="text"
          placeholder="Add a comment.."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <Button type="submit">Comment</Button>
      </form>
    </div>
  );
};

export default CommentForm;
