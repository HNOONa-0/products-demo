import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from '../pages/Products';
import AddProduct from '../pages/AddProduct';
import "../src/App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
