import Subform from './Subform';
import { BookFieldsArr } from '../../common/data';
import { validateNumber } from '../../common/util';
import { Registry } from '../../component-registry/Registry';
class BookSubform extends Subform {
    constructor(props){
      super(props)
      this.fieldsArr=BookFieldsArr
      this.disc="Please provide weight in KG"

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