import React from 'react';

import imgHero from '../images/background-1.jpg';
import logo from '../images/logo_teras.png';

function Hero() {
  return (
    <section
      className="hero bg-cover bg-center flex justify-center items-center"
      style={{ height: `100vh`, backgroundImage: `url(${imgHero})` }}
    >
      <div>
        <img className="w-64" src={logo} />
      </div>
    </section>
  );
}

export default Hero;
