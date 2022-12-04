import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coingecko from './coingecko';
import NotFound from './notFound';

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/exchange" element={<Coingecko />}></Route>
          <Route exact path="/" element={<Coingecko />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
