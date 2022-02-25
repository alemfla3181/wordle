import React, { Suspense } from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

import LandingPage from './views/LandingPage/LandingPage';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
