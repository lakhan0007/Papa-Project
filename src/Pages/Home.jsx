import React from 'react'
import Navbar from "../Components/Navbar/Navbar";
import OurTeam from "../Components/OurTeam/OurTeam";
import ContectUs from "../Components/ContectUs/ContectUs";
import Footer from "../Components/Footer/Footer";
import About from '../Components/About/About';

function Home() {
  return (
    <>
      <Navbar />
      <About/>
      <OurTeam />
      <ContectUs />
      <Footer />
    </>
  );
}

export default Home