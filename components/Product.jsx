// Product.jsx

import React, { useState } from 'react';
import "../src/App.css"

const Product = ({ sku, name, price, size }) => {
	const [isCheck,setIsCheck]=useState(false);
	// console.log(isCheck)
  return (
    <div className="product-item flex flex-direction-column">
		<div>
			<input type="checkbox" onClick={()=>setIsCheck(!isCheck)} checked={isCheck}/>
		</div>
		<div className="rest-of-height flex flex-direction-column justify-content-center align-items-center">
			<h4>{sku}</h4>
			<p>{name}</p>
			<p>{price} $</p>
			<p>{size}</p>
		</div>
	</div>
  );
};

export default Product;
