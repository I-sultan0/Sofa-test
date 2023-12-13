import React from "react";
import classes from "./TextImage.module.css";

const TextImage = (props) => {
  return (
    <div className={classes.imgContainer}>
      <h2>{props.text}</h2>
      <img src={props.image} alt="Work" />
    </div>
  );
};

export default TextImage;
