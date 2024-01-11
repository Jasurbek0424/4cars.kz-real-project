// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Hero from './components/Hero/Hero';
import GlobalMain from './components/GlobalMain/GlobalMain';
import Footer from './components/Footer/Footer';
import Shini from './components/Shini/Shini';
import Diski from './components/Diski/Diski';
import Payment from './components/Payment/Payment';
import Stocks from './components/Stocks/Stocks';
import Contacts from './components/Contacts/Contacts';
import Shinomontaj from './components/Shinomontaj/Shinomontaj';
import MapSite from './components/MapSite/MapSite';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Change from './components/Change/Change';
import SearchDiski from './components/SearchDiski/SearchDiski';
import Login from './components/Login/Login';
import Account from './components/Account/Account';
import FourNullFour from './components/404/FourNullFour';
import Product from './components/Product/Product';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<React.Fragment><Hero /><GlobalMain /><Footer /></React.Fragment>} />
          <Route path="/shini" element={<Shini />} />
          <Route path="/diski" element={<Diski />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/shinomontaj" element={<Shinomontaj />} />
          <Route path="/map-site" element={<MapSite />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/change" element={<Change />} />
          <Route path="/search-diski" element={<SearchDiski />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/product" element={<Product />} />
          <Route path='/404' element={<FourNullFour />} />
        </Routes>
      </>
    </Router >
  );
}

export default App;
