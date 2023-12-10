import React, { Component } from 'react';
import Subform from './Subform';
import { DVDFieldsArr } from '../../common/data';
// import { Registry } from '../../classes/Registry';
import { emptyStrings, validateNumber } from '../../common/util';
import { Registry } from '../../component-registry/Registry';
class DVDSubform extends Subform {
    constructor(props){
      super(props)
      this.fieldsArr=DVDFieldsArr
      this.disc="Please provide size"

      this.validatorRegistry=new Registry()
      this.validatorRegistry.insert("size", this.sizeValidator )
    }
    helloWorld(){
      console.log("hello from dvd ")
    }
    // sizeValidator(){
    //   const {size} = this.state.fields
    //   return this.validateNumber(size)
    // }
    // validate(){
    //   const obj = {
    //     size:this.sizeValidator(),        
    //   }
    //   this.handleErrorsChange(obj)
    //   return emptyStrings(obj);
    // }
    sizeValidator(size){
      return validateNumber(size)
    }
}
export default DVDSubform;