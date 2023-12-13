import React, { useEffect } from "react";
import { SofaGallery, SofaItem1, SofaItem2 } from "../components/SofaItems";
import TextImage from "../components/TextImage/TextImage";
// import ImageText from "../components/ImageText/ImageText";
import class1 from "./Home/Home.module.css";
import Gallery from "../components/Gallery/Gallery";

const Sofa = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {SofaItem1.map((item) => (
        <TextImage key={item.key} image={item.image} text={item.text} />
      ))}
      {SofaItem2.map((item) => (
        <TextImage key={item.key} image={item.image} text={item.text} />
      ))}
      {/* {SofaItem3.map((item) => (
        <TextImage key={item.key} image={item.image} text={item.text} />
      ))} */}

      <div className={class1.ourWorks}>
        <h2 className={class1.workHeading}>Our Works</h2>
        <div className={class1.types}>
          {SofaGallery.map((item) => (
            <Gallery key={item.key} image={item.image} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sofa;
