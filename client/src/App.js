import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';

import Product from './components/Product';
import ProductForm from './components/ProductForm'
import './App.css';

function App() {

  const [products, setProducts] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path='/home'/>
          <Route element={<Product />} path='/product/:id' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
