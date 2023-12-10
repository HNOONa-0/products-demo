import React, { forwardRef, useImperativeHandle } from 'react'
import LabelWithInput from '../components/LabelWithInput'
import FormHOC from './FormHOC'
const NewFurnitureForm= forwardRef(({ fields, handleFieldsChange }, ref) =>  {
  const fieldsArr=[
    {id:"height", name:"Height (CM)"},
    {id:"width", name:"Width (CM)"},
    {id:"length", name:"Length (CM)"},
  ]
  const helloworld=()=>{
    console.log("hello furniture");
  }  
  useImperativeHandle(ref, () => ({
    helloworld,
  }));
  // console.log(fields)
  return (
    <>
      {fieldsArr.map((en,i)=>{
        return <LabelWithInput 
          key={en.id} id={en.id} name={en.name} 
          value={fields[en.id]===undefined?"":fields[en.id]} handleChange={handleFieldsChange}
        />
      })}
    </>
  )
})

export default NewFurnitureForm;
