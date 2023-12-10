// BookForm.jsx
import React, { useState } from 'react';
import LabelWithInput from '../components/LabelWithInput';

const BookForm = () => {

  const [fields, setFields]=useState({})
  const handleFieldChange=(id, value)=>{
    setFields({...fields, [id]:value} )
  }
  // console.log(fields)
  const fieldsArr=[
    {id:"weight", name:"Weight (KG)"}
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

export default BookForm;
