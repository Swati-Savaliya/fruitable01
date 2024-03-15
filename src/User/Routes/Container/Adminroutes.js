import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Products from '../../../Admin/Products/Products';

function Adminroutes(props) {
    return (
        <div>
                <Routes>
                    <Route exact path="/products/*" element ={<Products />}/>
                </Routes>
        </div>
    );
}

export default Adminroutes;