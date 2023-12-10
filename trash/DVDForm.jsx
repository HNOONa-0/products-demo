// DVDForm.jsx
import React, { useState } from 'react';
import LabelWithInput from '../components/LabelWithInput';

const DVDForm = () => {

  const [fields, setFields]=useState({})
  const handleFieldChange=(id, value)=>{
    setFields({...fields, [id]:value} )
  }
  const fieldsArr=[
    {id:"size", name:"Size (MB)"}
  ]
  return (
    <>
      {fieldsArr.map((en,i)=>{
        return <LabelWithInput 
          key={en.id} id={en.id} name={en.name} 
          value={fields[en.id]===undefined?"":fields[en.id]} handleChange={handleFieldChange}
        />
      })}
    </>
  )
};

export default DVDForm;
