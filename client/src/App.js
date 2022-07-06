import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadProductsRequest } from './redux/productsRedux';

import Cart from './components/features/Cart/Cart';
import Home from './components/pages/Home/Home';
import MainLayout from './components/views/MainLayout/MainLayout';
import NavBar from './components/views/NavBar/NavBar';
import NotFound from './components/pages/NotFound/NotFound';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import Category from './components/features/Category/Category';
import Item from './components/features/Item/Item';
import Payment from './components/features/Payment/Payment';
import ThankYou from './components/views/ThankYou/ThankYou';



const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(loadProductsRequest()), [dispatch]);

  return (
    <BrowserRouter>
      <MainLayout>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/category/:name" element={<Category />} />
          <Route exact path="/category/:name/item/:id" element={<Item />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route exact path="/cart" element={<Cart />} /> 
          <Route exact path="/payment" element={<Payment />} />
          <Route exact path="/thankYou" element={<ThankYou />} />
          <Route path="*" element={<NotFound />}
          />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;