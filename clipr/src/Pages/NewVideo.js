import React, { useState } from "react";
import Button from "../Components/Button/Button";
import Input from "../Components/Input/Input";
import { AuthContext } from "../Context/AuthContext";
import VideoUpload from "../Components/VideoUpload/VideoUpload";
import "./NewVideo.scss";
import { useHistory } from "react-router";
//import axios from "axios";

const NewVideo = () => {
  const history = useHistory();
  const [formState, changeFormState] = useState({
    title: "",
    description: "",
    genre: "",
  });

  const { title, description, genre } = formState;

  const videoSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", formState.title);
      formData.append("description", formState.description);
      formData.append("genre", formState.genre);
      //Graphql post request here;
      //await axios.post('http://localhost:5002/')
      history.push("/");
    } catch (error) {
      console.log(error, "Error uploading video");
    }
  };

  const handleChange = (event) => {
    changeFormState({ ...formState, [event.target.name]: event.target.value });
  };

  return (
    <form className="form">
      <h1>Upload a new Video</h1>
      <VideoUpload errorText="Please select a video" />
      <br />
      <Input name="title" value={title} label="Title" onChange={handleChange} />
      <Input
        name="description"
        value={description}
        label="Description"
        onChange={handleChange}
      />
      <Input name="genre" value={genre} label="Genre" onChange={handleChange} />
      <Button>Upload</Button>
    </form>
  );
};

export default NewVideo;
