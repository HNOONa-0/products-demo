import React, { Component } from 'react';
import LabelWithInput from '../LabelWithInput';
import { isNumber } from '../../common/util';
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
    // console.log(this.props)
  }
  getFields=()=>{
    return this.state.fields;
  }
  // for oop
  // validateNumber(str){
  //   if(!str || str.length === 0) return "This field cannot be empty"
  //   if(!isNumber(str) ) return "Please enter a valid number"
  //   return "";
  // }
  // validate(){

  // }
  validate(){
    let ok = true;
    let obj={}
    // console.log(this.fieldsArr)
    for(let i=0;i<this.fieldsArr.length;i++ ){
      const en=this.fieldsArr[i]
      // console.log(en)
      const validator = this.validatorRegistry.get(en.id)
      // console.log(validator)
      const res = validator(this.state.fields[en.id] )
      obj[en.id] = res
      ok = ok & (res.length==0)
      // console.log(res)
    }
    // console.log(obj)
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
          />
        ))}
        <p>{this.disc}</p>
      </>
    );
  }
}

export default Subform;
