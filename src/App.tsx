import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import Header from './components/Header';


function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
