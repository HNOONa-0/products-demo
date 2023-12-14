import React from 'react';
import { maxLen } from '../../common/data';

const LabelWithInput = ({ id, name, value, handleChange, error, type}) => {
  return (
    <div className="form-group flex justify-content-space-between">
      <label htmlFor={id}>{name}</label>
      <div>
        <input
          type={type}
          id={id}
          value={value}
          onChange={(e) => {
            if(e.target.value.length >= maxLen) return;
            handleChange(id, e.target.value)
          } }
          className="input-min-width"
        />
        <div className="error-message input-max-width" >{error}</div>
      </div>
    </div>
  );
};

export default LabelWithInput;
