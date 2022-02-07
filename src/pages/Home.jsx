import React from 'react';
import Navbar from '../components/Navbar';
import SpecialOffer from '../components/SpecialOffer';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';

const Home = () => {
  return (
    <div>
      <SpecialOffer /> 
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  )
}

export default Home;