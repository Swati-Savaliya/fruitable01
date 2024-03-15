import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Adminroutes from './User/Routes/Container/Adminroutes';
import Userroutes from './User/Routes/Container/Userroutes';

// import Home from './User/Container/Home/Home';
// import Header from './User/Component/Header/Header';
// import Footer from './User/Component/Footer/Footer';
// import Shop from './User/Container/Shop/Shop';
// import Details from './User/Container/Shop_details/Details';
// import Cart from './User/Container/Cart/Cart';
// import Checkout from './User/Container/Checkout/Checkout';
// import Testimonial from './User/Container/Testimonial/Testimonial';
// import Pages from './User/Container/Pages/Pages';
// import Contact from './User/Container/Contact/Contact';

function App() {
  return (
    <>
        <Routes>
            <Route exact path="/*" element ={<Userroutes />}/>
            <Route exact path ="/admin/*" element ={<Adminroutes />}/>

        </Routes>
    </>
  );
}

export default App;
