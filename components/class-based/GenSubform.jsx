import React, { Component } from 'react';
import Subform from './Subform';
import { GenFieldsArr } from '../../common/data';
import { Registry } from '../../classes/Registry';
import { emptyStrings, validateNumber } from '../../common/util';
class GenSubform extends Subform {
    constructor(props){
      super(props)
      this.fieldsArr=GenFieldsArr
      this.disc=""

      this.validatorRegistry=new Registry()
      this.validatorRegistry.insert("sku", this.skuValidator )
      this.validatorRegistry.insert("name", this.nameValidator )
      this.validatorRegistry.insert("price", this.priceValidator )
    }
    helloWorld(){
      console.log("hello from gen ")
    }
    // skuValidator(){
    //   const {sku} = this.state.fields
    //   if(!sku || sku.length === 0) return "This field cannot be empty"
    //   return "";
    // }
    // nameValidator(){
    //   const {name} = this.state.fields
    //   if(!name || name.length === 0) return "This field cannot be empty"
    //   return "";
    // }
    // priceValidator(){
    //   const {price} = this.state.fields
    //   return this.validateNumber(price)
    // }
    // validate(){
    //   const obj = {
    //     sku:this.skuValidator(),
    //     name:this.nameValidator(),
    //     price:this.priceValidator()
    //   }
    //   this.handleErrorsChange(obj)
    //   return emptyStrings(obj);
    // }
    skuValidator(sku){
      if(!sku || sku.length === 0) return "This field cannot be empty"
      return "";
    }
    nameValidator(name){
      if(!name || name.length === 0) return "This field cannot be empty"
      return "";
    }
    priceValidator(price){
      return validateNumber(price)
    }
}
export default GenSubform;