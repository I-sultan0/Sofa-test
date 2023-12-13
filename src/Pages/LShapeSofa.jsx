import React, { useEffect } from "react";
import { LShapeSofaGallery, LSofa1, LSofa2 } from "../components/SofaItems";
import TextImage from "../components/TextImage/TextImage";
// import ImageText from "../components/ImageText/ImageText";
import class1 from "./Home/Home.module.css";
import Gallery from "../components/Gallery/Gallery";

const LShapeSofa = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {LSofa1.map((item) => (
        <TextImage key={item.key} image={item.image} text={item.text} />
      ))}
      {LSofa2.map((item) => (
        <TextImage key={item.key} image={item.image} text={item.text} />
      ))}

      <div className={class1.ourWorks}>
        <h2 className={class1.workHeading}>Our Works</h2>
        <div className={class1.types}>
          {LShapeSofaGallery.map((item) => (
            <Gallery key={item.key} image={item.image} link={item.link} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LShapeSofa;
