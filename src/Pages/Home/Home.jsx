import React, { useEffect } from "react";
import HeroImage from "../../assets/HeroImage.jpg";
import Gallery from "../../components/Gallery/Gallery";
import classes from "./Home.module.css";
import { HomeGallery } from "../../components/SofaItems";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.heroSection}>
          <div className={classes.heroText}>
            <h1>
              Upgrade Your Home <br /> With Quality Furniture
            </h1>
            <h3>
              Find the perfect pieces for your space at Bengal Comfort. Explore
              our wide selection of stylish and comfortable furniture today!
            </h3>
            <div className={classes.heroBtn}>
              <button
                onClick={() => {
                  window.location.href = `tel:9123706345`;
                }}
              >
                Call Us
              </button>
              <a href="http://wa.me/+919123706345" target="blank">
                <button>WhatsApp Us</button>
              </a>{" "}
            </div>
          </div>
          <div className={classes.heroImage}>
            <img src={HeroImage} alt="Sofa" />
          </div>
        </div>
        <div className={classes.ourWorks}>
          <h2 className={classes.workHeading}>Our Works</h2>
          <div className={classes.types}>
            {HomeGallery.map((item) => (
              <Gallery key={item.key} image={item.image} link={item.link} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
