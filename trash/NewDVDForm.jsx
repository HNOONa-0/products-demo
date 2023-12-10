import React, { forwardRef, useImperativeHandle } from 'react'
import LabelWithInput from '../components/LabelWithInput'
import FormHOC from './FormHOC'
const NewDVDForm= forwardRef(({ fields, handleFieldsChange }, ref) =>  {
  const fieldsArr=[
    {id:"size", name:"Size (MB)"}
  ]
  const helloworld=()=>{
    console.log("hello dvd");
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

export default NewDVDForm;
