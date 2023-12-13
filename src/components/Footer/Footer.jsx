import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
import fb from "../../assets/facebook.png";
import insta from "../../assets/insta.png";
import yt from "../../assets/yt.png";

const Footer = () => {
  return (
    <>
      <div className={classes.footer}>
        <div className={classes.footerElements}>
          <div className={classes.logo}>
            <div className={classes.logoElements}>
              <Link to="/">
                <h2>Bengal Comfort</h2>
              </Link>
              <p>Visit Us at - 37A Topsia Road Kolkata - 700046</p>
              <br />
              <p>Call or whatsapp Us at - 9123706345, 7980082400</p>
              <br />
              <p>Email Us at - bengalcomfort@gmail.com</p>
            </div>
            <div className={classes.socials}>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={fb} alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com/bengalcomfort"
                target="_blank"
                rel="noreferrer"
              >
                <img src={insta} alt="Instagram" />
              </a>
              <a
                href="https://www.youtube.com/@Bengalcomfort"
                target="_blank"
                rel="noreferrer"
              >
                <img src={yt} alt="Youtube" />
              </a>
            </div>
          </div>
          <div className={classes.items1}>
            <Link to="/sofa">
              <p>Sofa</p>
            </Link>
            <Link to="/lshapesofa">
              <p>L Shape Sofa</p>
            </Link>
            <Link to="lshapehydraulic">
              <p>L Shape Hydrolic Sofa Cum Bed</p>
            </Link>
            <Link to="/isofa">
              <p>I Shape Sofa</p>
            </Link>
            <Link to="/officechair">
              <p>Office Chair</p>
            </Link>
            <Link to="/highbackchair">
              <p>High Back Chair</p>
            </Link>
          </div>
          <div className={classes.items2}>
            <Link to="/sofacumbed">
              <p>Sofa Cum Bed</p>
            </Link>

            <Link to="/wardrobe">
              <p>Wardrobe</p>
            </Link>
            <Link to="/boxbed">
              <p>Box Bed</p>
            </Link>
            <Link to="/headboard">
              <p>Headboard</p>
            </Link>
            <Link to="/diningchair">
              <p>Dining Chair</p>
            </Link>
            <Link to="/mattress">
              <p>Mattress</p>
            </Link>
          </div>
        </div>
        <div className={classes.copyright}>
          &copy; 2023-2024 All Rights Reserved
        </div>
      </div>{" "}
    </>
  );
};

export default Footer;
