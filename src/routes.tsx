import React from 'react';
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import Repositorios from './pages/Repositorios'

const Router: React.FC = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/repositorios" component={Repositorios} />
    </>
  );
}

export default Router;