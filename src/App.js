import React from 'react';


import Home from './User/Container/Home/Home';
import Header from './User/Component/Header/Header';
import Footer from './User/Component/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Shop from './User/Container/Shop/Shop';
import Details from './User/Container/Shop_details/Details';
import Cart from './User/Container/Cart/Cart';
import Checkout from './User/Container/Checkout/Checkout';
import Testimonial from './User/Container/Testimonial/Testimonial';
import Pages from './User/Container/Pages/Pages';
import Contact from './User/Container/Contact/Contact';

function App() {
  return (
    <>
    
    <Header />
      <Routes>
          <Route exact path="/" element ={<Home />}/>
          <Route exact path="/shop" element ={<Shop />} />
          <Route exact path="/details" element ={<Details />} />
          <Route exact path="/cart" element ={<Cart />} />
          <Route exact path="/checkout" element ={<Checkout />} />
          <Route exact path="/testimonial" element ={<Testimonial />} /> 
          <Route exact path="/pages" element ={<Pages />} />
          <Route exact path="/contact" element ={<Contact />} />
      </Routes>
      
      {/* <Home /> */}
    <Footer />
    </>
  );
}

export default App;
