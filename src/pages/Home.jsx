import React from 'react';
import Navbar from '../components/Navbar';
import SpecialOffer from '../components/SpecialOffer';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <div>
      <SpecialOffer /> 
      <Navbar />
      <Slider />
    </div>
  )
}

export default Home;