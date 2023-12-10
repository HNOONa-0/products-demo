import React, { useRef, useState } from "react" 
// import FormRegistry from "../components/FormRegistery";
// import GenForm from "../components/GenForm";
// import NewDVDForm from "../components/NewDVDForm";
// import FormHOC from "../components/FormHOC";
// import NewFormRegistry from "../components/NewFormRegistry";

// import TypeSwitcher from "../components/TypeSwitcher";
// import DVDSubform from "../components/classical/DVDSubform";
// import BookSubform from "../components/classical/BookSubform";
// import FurnitureSubform from "../components/classical/FurnitureSubform";
// import SelectSubform from "../components/component-registry/SubformRegistry";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TypeSwitcher from "../components/functional/TypeSwitcher";
import GenSubform from "../components/classical/GenSubform";
import SelectSubform from "../component-registry/SubformRegistry";

function AddProduct() {
    const [productType, setProductType] = useState("DVD");
    const genSubformRef=useRef();
    const customSubformRef=useRef();
    const navigate=useNavigate();
    return (
      <>
        <div className="flex justify-content-space-between margin-bottom-10 margin-top-10 header-padding">
          <h1>Product Add</h1>
          <div className="flex align-self-center gap-20">
            <button onClick={()=>{
              if(!genSubformRef.current.validate() || !customSubformRef.current.validate() ) return;
              axios.post("http://localhost/products-demo/api/index.php", {...genSubformRef.current.getFields(), ...customSubformRef.current.getFields(), type:productType})
              .then(response=>{
                console.log(response.data)
                navigate('/')
              })
              .catch(error=>{
                if(error.response?.status === 400){
                  genSubformRef.current.handleSingleErrorChange("sku", "Product with this SKU already exists");
                }
                // this case?
                if(error.response?.status === 500){
                  console.log("server not working");
                }
              })
            }}>Save</button>
            <button onClick={()=>navigate('/')}>Cancel</button>
          </div>
        </div>

        <div className="horizontal-line margin-bottom-10"></div>

        <div 
          className="form-div flex flex-direction-column header-padding-left"
        >
          <form id="product_form" >
            <GenSubform ref={genSubformRef} />
            <TypeSwitcher value={productType} handleChange={setProductType} />
            <SelectSubform productType={productType} argRef={customSubformRef}/>
        </form>
        </div>
      
      </>
    )
}
  
export default AddProduct
  