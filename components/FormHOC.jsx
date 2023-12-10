import React, { useState } from 'react'

const FormHOC=(OriginalComponent, ref )=>{
  const NewComponent=()=>{
    const [fields, setFields]=useState({})
    const handleFieldsChange=(id, value)=>{
      setFields({...fields, [id]:value} )
    }
    return <OriginalComponent fields={fields} handleFieldsChange={handleFieldsChange} ref={ref}/>
  }
  return NewComponent;
}

export default FormHOC
