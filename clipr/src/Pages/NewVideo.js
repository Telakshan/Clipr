import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Button from "../Components/Button/Button";
import Input from "../Components/Input/Input";

import "./NewVideo.scss";

const NewVideo = () => {
  const [formState, changeFormState] = useState({
    title: "",
    description: "",
    genre: "",
  });

  const { title, description, genre } = formState;

  const handleChange = (event) => {
    changeFormState({ ...formState, [event.target.name]: event.target.value });
  };

  return (
    <form className="form">
      <button className="upload">
        <FaPlus className="fa-plus"/>
        Select Files
      </button>

      <br />
      <Input
        name="title"
        value={title}
        label="Title"
        onChange={handleChange}
        required
      />
      <Input
        name="description"
        value={description}
        label="Description"
        onChange={handleChange}
        required
      />
      <Input
        name="genre"
        value={genre}
        label="Genre"
        onChange={handleChange}
        required
      />
      <Button>Upload</Button>
    </form>
  );
};

export default NewVideo;
