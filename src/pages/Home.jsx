import React from 'react';
import Navbar from '../components/Navbar';
import SpecialOffer from '../components/SpecialOffer';
import Slider from '../components/Slider';
import Slogan from '../components/Slogan';
import Categories from '../components/Categories';
import FeaturedProdTitle from '../components/FeaturedProdTitle';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div>
      <SpecialOffer />
      <Navbar />
      <Slider />
      <Slogan />
      <Categories />
      <FeaturedProdTitle />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home;