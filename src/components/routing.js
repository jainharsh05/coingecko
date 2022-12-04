import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coingecko from './coingecko';
import CoingeckoDetail from './coingeckoDetail';
import NotFound from './notFound';

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Coingecko />}></Route>
          <Route exact path="/:id" element={<CoingeckoDetail />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
