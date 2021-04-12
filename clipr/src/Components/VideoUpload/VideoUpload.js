import React, { useState, useRef, useEffect } from "react";
import Button from "../Button//Button";
import "./VideoUpload.scss";

const VideoUpload = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);
  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickVideoHandler = () => {
    filePickerRef.current.click();
  };

  const pickedHandler = (event) => {
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = true;
    }
    //props.onInput(props.id, pickedFile, fileIsValid);
  };


  return (
    <div className="form-control">
      <input
        ref={filePickerRef}
        style={{ display: "none" }}
        type="file"
        accept=".mp4,.mov,.wmv,.mkv"
        onChange={pickedHandler}
      />
      <div className={`video-upload ${props.center && "center"}`}>
        <div className="video-upload__preview">
          {previewUrl && <p>{file.name}</p>}
          {!previewUrl && <p>Please choose a video</p>}
        </div>
        <Button onClick={pickVideoHandler}>Choose Video</Button>
      </div>
    </div>
  );
};

export default VideoUpload;
