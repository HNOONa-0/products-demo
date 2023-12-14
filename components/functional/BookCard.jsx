
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
        // checked={isCheck}
        className='delete-checkbox'
        id={sku}
      />
		</div>
		<div className="rest-of-height flex flex-direction-column justify-content-center align-items-center">
			<h4>{sku}</h4>
			<p>{name}</p>
			<p>{price}.00 $</p>
			<p>Weight: {weight} KG</p>
		</div>
	</div>
  );
};

// export default React.memo(BookCard);
export default BookCard;