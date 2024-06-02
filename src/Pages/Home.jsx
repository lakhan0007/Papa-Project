import React from 'react'
import Navbar from "../Components/Navbar/Navbar";
import OurTeam from "../Components/OurTeam/OurTeam";
import ContectUs from "../Components/ContectUs/ContectUs";
import Footer from "../Components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <OurTeam />
      <ContectUs />
      <Footer />
    </>
  );
}

export default Home