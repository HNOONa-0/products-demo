import React, { useState } from 'react';

const LabelWithInput = ({ id, name, value, handleChange, error}) => {
  return (
    <div className="form-group flex justify-content-space-between">
      <label htmlFor={id}>{name}</label>
      <div>
        <input
          type="text"
          id={id}
          value={value}
          onChange={(e) => handleChange(id, e.target.value) }
        />
        <div className="error-message">{error}</div>
      </div>
    </div>
  );
};

export default LabelWithInput;
