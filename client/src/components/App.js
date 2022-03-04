import React, { Suspense } from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

import LandingPage from './views/LandingPage/LandingPage';
import Footer from './views/Footer/Footer';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
  </BrowserRouter>
  );
}

export default App;
