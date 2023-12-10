import React, { Component } from 'react';
import Subform from './Subform';
import { BookFieldsArr } from '../../common/data';
import { Registry } from '../../classes/Registry';
import { emptyStrings, validateNumber } from '../../common/util';

class BookSubform extends Subform {
    constructor(props){
      super(props)
      this.fieldsArr=BookFieldsArr
      this.disc="Please provide weight"

      this.validatorRegistry=new Registry()
      this.validatorRegistry.insert("weight", this.weightValidator )
    }
    helloWorld(){
      console.log("hello from book")
    }
    // weightValidator(){
    //   const {weight} = this.state.fields
    //   return this.validateNumber(weight)
    // }
    // validate(){
    //   const obj = {
    //     weight:this.weightValidator(),
    //   }
    //   this.handleErrorsChange(obj)
    //   return emptyStrings(obj);
    // }
    weightValidator(weight){
      return validateNumber(weight)
    }
   
    
}
export default BookSubform;