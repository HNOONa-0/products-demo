import React, { Component } from 'react';
import LabelWithInput from '../functional/LabelWithInput';

class Subform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {}
    };
    this.fieldsArr=[]
    this.disc=""
    this.validatorRegistry=null
  }
  getFields=()=>{
    return this.state.fields;
  }
  validate(){
    let ok = true;
    let obj={}

    for(let i=0;i<this.fieldsArr.length;i++ ){
      const en=this.fieldsArr[i]
      const validator = this.validatorRegistry.get(en.id)
      const res = validator(this.state.fields[en.id] )

      obj[en.id] = res
      ok = ok & (res.length==0)
    }

    this.handleErrorsChange(obj)
    return ok;
  }

  handleFieldsChange = (obj) => {
    this.setState((prevState) => ({
      fields: { ...obj},
    }));
  };
  handleSingleFieldChange=(id, value)=> {
    this.setState((prevState) => ({
      fields: { ...prevState.fields, [id]: value },
    }));
  };
  handleErrorsChange = (obj) => {
    this.setState((prevState) => ({
      errors: {...obj},
    }));
  };
  handleSingleErrorChange=(id, value)=>{
    this.setState((prevState) => ({
      errors: { ...prevState.errors, [id]: value },
    }));
  }
  render() {
    const { fields } = this.state;
    const { errors } = this.state;
    const fieldsArr = this.fieldsArr;
    return (
      <>
        {fieldsArr.map((en) => (
          <LabelWithInput
            key={en.id}
            id={en.id}
            name={en.name}
            value={fields[en.id] === undefined ? '' : fields[en.id]}
            handleChange={this.handleSingleFieldChange}
            error={errors[en.id]}
            type={en.type}
          />
        ))}
        {this.disc!==""&&<h3>{this.disc}</h3>}
      </>
    );
  }
}

export default Subform;
