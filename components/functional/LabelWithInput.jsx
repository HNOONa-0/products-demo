import React, { useState } from 'react';
import { maxLen } from '../../common/data';

const LabelWithInput = ({ id, name, value, handleChange, error}) => {
  return (
    <div className="form-group flex justify-content-space-between">
      <label htmlFor={id}>{name}</label>
      <div>
        <input
          type="text"
          id={id}
          value={value}
          onChange={(e) => {
            if(e.target.value.length >= maxLen) return;
            handleChange(id, e.target.value)
          } }
          style={{minWidth:"160px"}}
        />
        <div className="error-message" style={{maxWidth:"160px"}}>{error}</div>
      </div>
    </div>
  );
};

export default LabelWithInput;
