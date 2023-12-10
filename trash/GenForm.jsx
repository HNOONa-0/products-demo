import React, { useState, forwardRef, useImperativeHandle } from 'react';
import LabelWithInput from '../components/LabelWithInput';

const GenForm = forwardRef((props, ref) => {
  const [fields, setFields] = useState({});
  
  const handleFieldChange = (id, value) => {
    setFields({ ...fields, [id]: value });
  };
  const helloworld=()=>{
    console.log("hello world");
  }
  useImperativeHandle(ref, () => ({
    helloworld,
  }));

  const fieldsArr = [
    { id: 'sku', name: 'SKU' },
    { id: 'name', name: 'Name' },
    { id: 'price', name: 'Price ($)' }
  ];

  return (
    <>
      {fieldsArr.map((en, i) => {
        return (
          <LabelWithInput
            key={en.id}
            id={en.id}
            name={en.name}
            value={fields[en.id] === undefined ? '' : fields[en.id]}
            handleChange={handleFieldChange}
          />
        );
      })}
    </>
  );
});

export default GenForm;