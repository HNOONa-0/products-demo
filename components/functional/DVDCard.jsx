
import React, { useState } from 'react';

const DVDCard = ({ props, handleChange }) => {
  const {sku, name, price, size}=props;
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
			<p>Size: {size} MB</p>
		</div>
	</div>
  );
};

// export default React.memo(DVDCard);
export default DVDCard;
