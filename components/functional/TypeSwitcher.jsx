import React, { useState } from 'react';
const TypeSwitcher = ({value,handleChange}) => {

  return (
    <div className="form-group flex justify-content-space-around">
      <h3>Type switcher</h3>
      <select
        id="productType"
        value={value}
        onChange={(e)=>{
          if(e.target.value === productType) return;
          handleChange(e.target.value)
        } }
      >
        <option value="DVD">DVD</option>
        <option value="Furniture">Furniture</option>
        <option value="Book">Book</option>
      </select>
    </div>
  );
};

export default TypeSwitcher;
