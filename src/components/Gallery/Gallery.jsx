import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Gallery.module.css";

const Gallery = (props) => {
  const navigate = useNavigate();

  return (
    <div className={classes.imgContainer}>
      <img
        src={props.image}
        onClick={() => navigate(props.link)}
        loading="lazy"
        alt="Work"
      />
    </div>
  );
};

export default Gallery;
