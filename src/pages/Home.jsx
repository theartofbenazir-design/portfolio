import React from 'react';
import Hero from '../sections/Hero';
import FeaturedWork from '../sections/FeaturedWork';
import Showcase3D from '../components/Showcase3D';
import About from '../sections/About';
import Services from '../sections/Services';
import Process from '../sections/Process';
import Achievements from '../sections/Achievements';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <FeaturedWork />
      <Showcase3D />
      <About />
      <Services />
      <Process />
      <Achievements />
      <Contact />
    </main>
  );
}
