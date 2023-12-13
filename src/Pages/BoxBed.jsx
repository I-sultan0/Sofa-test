import React, { useEffect } from "react";
import { BoxBedGallery, BoxBed1, BoxBed2 } from "../components/SofaItems";
import TextImage from "../components/TextImage/TextImage";
// import ImageText from "../components/ImageText/ImageText";
import class1 from "./Home/Home.module.css";
import Gallery from "../components/Gallery/Gallery";

const BoxBed = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {BoxBed1.map((item) => (
        <TextImage key={item.key} image={item.image} text={item.text} />
      ))}
      {BoxBed2.map((item) => (
        <TextImage key={item.key} image={item.image} text={item.text} />
      ))}

      <div className={class1.ourWorks}>
        <h2 className={class1.workHeading}>Our Works</h2>
        <div className={class1.types}>
          {BoxBedGallery.map((item) => (
            <Gallery key={item.key} image={item.image} link={item.link} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BoxBed;
