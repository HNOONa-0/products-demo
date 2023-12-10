// FurnitureForm.jsx
import React, { useState } from 'react';
import LabelWithInput from './LabelWithInput';

const FurnitureForm = () => {

  const [fields, setFields]=useState({})
  const handleFieldChange=(id, value)=>{
    setFields({...fields, [id]:value} )
  }
  // console.log(fields)
  const fieldsArr=[
    {id:"height", name:"Height (CM)"},
    {id:"width", name:"Width (CM)"},
    {id:"length", name:"Length (CM)"},
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

export default FurnitureForm;
