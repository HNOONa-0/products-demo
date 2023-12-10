import React, { forwardRef, useImperativeHandle } from 'react'
import LabelWithInput from '../components/LabelWithInput'
import FormHOC from './FormHOC'
const NewBookForm= forwardRef(({ fields, handleFieldsChange }, ref) =>  {
  const fieldsArr=[
    {id:"weight", name:"Weight (KG)"}
  ]
  const helloworld=()=>{
    console.log("hello book");
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

export default NewBookForm;
