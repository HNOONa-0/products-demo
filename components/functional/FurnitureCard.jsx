// Product.jsx

import React, { useState } from 'react';

const FurnitureCard = ({ props, handleChange }) => {
  const {sku, name, price, height, width, length}=props;
  const [isCheck, setIsCheck]=useState(false);
  return (
    <div className="product-item flex flex-direction-column">
		<div>
			<input type="checkbox"
        onChange={()=>{
          handleChange(sku, isCheck);
          setIsCheck(!isCheck);
        }}
        checked={isCheck}
      />
		</div>
		<div className="rest-of-height flex flex-direction-column justify-content-center align-items-center">
			<h4>{sku}</h4>
			<p>{name}</p>
			<p>{price} $</p>
			<p>{height}x{width}x{length}</p>
		</div>
	</div>
  );
};

export default FurnitureCard;
