import React from "react";
import classes from "../TextImage/TextImage.module.css";

const TextImage = (props) => {
  return (
    <div className={classes.imgContainer}>
      <img src={props.image} alt="Work" />
      <h2>{props.text}</h2>
    </div>
  );
};

export default TextImage;
