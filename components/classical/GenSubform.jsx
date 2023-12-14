import Subform from './Subform';
import { GenFieldsArr } from '../../common/data';
import { validateNumber } from '../../common/util';
import { Registry } from '../../component-registry/Registry';
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
    // more oop approach
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
      if(!sku || sku.length === 0) return "Please submit required data"
      return "";
    }
    nameValidator(name){
      if(!name || name.length === 0) return "Please submit required data"
      return "";
    }
    priceValidator(price){
      return validateNumber(price)
    }
}
export default GenSubform;