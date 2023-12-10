import React, { Component } from 'react';
import Subform from './Subform';
import { FurnitureFieldsArr } from '../../common/data';
// import { Registry } from '../../classes/Registry';
import { emptyStrings, validateNumber } from '../../common/util';
import { Registry } from '../../component-registry/Registry';
class FurnitureSubform extends Subform {
    constructor(props){
      super(props)
      this.fieldsArr=FurnitureFieldsArr
      this.disc="Please provide dimensions"

      this.validatorRegistry=new Registry()
      this.validatorRegistry.insert("height", this.heightValidator )
      this.validatorRegistry.insert("width", this.widthValidator )
      this.validatorRegistry.insert("length", this.lengthValidator )
    }
    helloWorld(){
      console.log("hello from furniture ")
    }
    // heightValidator(){
    //   const {height} = this.state.fields
    //   return this.validateNumber(height)
    // }
    // widthValidator(){
    //   const {width} = this.state.fields
    //   return this.validateNumber(width)
    // }
    // lengthValidator(){
    //   const {length} = this.state.fields
    //   return this.validateNumber(length)
    // }
    // validate(){
    //   const obj = {
    //     height:this.heightValidator(),
    //     width:this.widthValidator(),
    //     length:this.lengthValidator()
    //   }
    //   this.handleErrorsChange(obj)
    //   return emptyStrings(obj);
    // }
    heightValidator(height){
      return validateNumber(height)
    }
    widthValidator(width){
      return validateNumber(width)
    }
    lengthValidator(length){
      return validateNumber(length)
    }
}
export default FurnitureSubform;