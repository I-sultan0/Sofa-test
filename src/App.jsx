import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Sofa from "./Pages/Sofa";
import LSofa from "./Pages/LShapeSofa";
import LHydraulic from "./Pages/LHydraulic";
import ISofa from "./Pages/ISofa";
import SofaCumBed from "./Pages/SofaCumBed";
import Wardrobe from "./Pages/Wardrobe";
import BoxBed from "./Pages/BoxBed";
import Headboard from "./Pages/Headboard";
import DiningChair from "./Pages/DiningChair";
import OfficeChair from "./Pages/OfficeChair";
import HighBackChair from "./Pages/HighBackChair";
import Mattress from "./Pages/Mattress";
import Contact from "./components/Contact/Contact";
import TvCabinet from "./Pages/TvCabinet";
import BossChair from "./Pages/BossChair";
import CarbonSofa from "./Pages/CarbonSofa";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/sofa" element={<Sofa />} />
          <Route path="/lshapesofa" element={<LSofa />} />
          <Route path="/lshapehydraulic" element={<LHydraulic />} />
          <Route path="/isofa" element={<ISofa />} />
          <Route path="/sofacumbed" element={<SofaCumBed />} />
          <Route path="/wardrobe" element={<Wardrobe />} />
          <Route path="/boxbed" element={<BoxBed />} />
          <Route path="/headboard" element={<Headboard />} />
          <Route path="/diningchair" element={<DiningChair />} />
          <Route path="/officechair" element={<OfficeChair />} />
          <Route path="/highbackchair" element={<HighBackChair />} />
          <Route path="/mattress" element={<Mattress />} />
          <Route path="/tvcabinet" element={<TvCabinet />} />
          <Route path="/bosschair" element={<BossChair />} />
          <Route path="/carbonsofa" element={<CarbonSofa />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Contact />
      <Footer />
    </>
  );
};

export default App;
