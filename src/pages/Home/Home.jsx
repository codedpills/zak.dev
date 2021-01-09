import React from "react";
import "./Home.css";

import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import Projects from '../../components/Projects/Projects';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
    </div>
  );
};

export default Home;
