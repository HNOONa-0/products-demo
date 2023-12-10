// Product.jsx

import React, { useState } from 'react';

const BookCard = ({ props, handleChange }) => {
  const {sku, name, price, weight}=props;
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
			<p>{weight}</p>
		</div>
	</div>
  );
};

export default BookCard;
