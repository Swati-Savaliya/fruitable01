import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../../Container/Home/Home';
import Header from '../../Component/Header/Header';
import Shop from '../../Container/Shop/Shop';
import Details from '../../Container/Shop_details/Details';
import Cart from '../../Container/Cart/Cart';
import Checkout from '../../Container/Checkout/Checkout';
import Testimonial from '../../Container/Testimonial/Testimonial';
import Pages from '../../Container/Pages/Pages';
import Contact from '../../Container/Contact/Contact';
import Footer from '../../Component/Footer/Footer';
import ShopData from '../../Container/Shop/ShopData';


function Userroutes(props) {
    return (
        <div>
                    
    <Header />
      <Routes>
          <Route exact path="/" element ={<Home />}/>
          <Route exact path="/shop" element ={<Shop />} />
          <Route exact path="/shop/:id" element ={<Details />} />
          <Route exact path="/cart" element ={<Cart />} />
          <Route exact path="/checkout" element ={<Checkout />} />
          <Route exact path="/testimonial" element ={<Testimonial />} /> 
          <Route exact path="/pages" element ={<Pages />} />
          <Route exact path="/contact" element ={<Contact />} />
          <Route exact path="/shopdata/:id" element={<ShopData />} />

      </Routes>
      
    <Footer />

        </div>
    );
}

export default Userroutes;