import React, { useEffect } from "react";
import {
  CarbonSofaGallery,
  CarbonSofa1,
  CarbonSofa2,
} from "../components/SofaItems";
import TextImage from "../components/TextImage/TextImage";
import class1 from "./Home/Home.module.css";
import Gallery from "../components/Gallery/Gallery";

const CarbonSofa = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {CarbonSofa1.map((item) => (
        <TextImage key={item.key} image={item.image} text={item.text} />
      ))}
      {CarbonSofa2.map((item) => (
        <TextImage key={item.key} image={item.image} text={item.text} />
      ))}

      <div className={class1.ourWorks}>
        <h2 className={class1.workHeading}>Our Works</h2>
        <div className={class1.types}>
          {CarbonSofaGallery.map((item) => (
            <Gallery key={item.key} image={item.image} link={item.link} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CarbonSofa;
