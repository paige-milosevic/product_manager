import React, { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';

import Product from './components/Product';
import ProductUpdate from './components/ProductUpdate';
import './App.css';

function App() {

  const [products, setProducts] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path='/home'/>
          <Route element={<Product />} path='/product/:id' />
          <Route element={<ProductUpdate />} path='/product/update/:id' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
