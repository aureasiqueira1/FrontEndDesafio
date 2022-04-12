import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Repositorios from './pages/Repositorios'

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/repositorios" element={<Repositorios />} />
    </Routes>
  );
}

export default Router;