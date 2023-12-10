import React, { useRef, useState } from "react" 
// import FormRegistry from "../components/FormRegistery";
// import GenForm from "../components/GenForm";
// import NewDVDForm from "../components/NewDVDForm";
// import FormHOC from "../components/FormHOC";
// import NewFormRegistry from "../components/NewFormRegistry";

import TypeSwitcher from "../components/TypeSwitcher";
import DVDSubform from "../components/class-based/DVDSubform";
import BookSubform from "../components/class-based/BookSubform";
import FurnitureSubform from "../components/class-based/FurnitureSubform";
import SelectSubform from "../components/component-registry/SubformRegistry";
import GenSubform from "../components/class-based/GenSubform";
import axios from "axios";

function AddProduct() {
    const [productType, setProductType] = useState("DVD");
    const genSubformRef=useRef();
    const customSubformRef=useRef();
    
    // const EnhancedNewDVD=FormHOC(NewDVDForm,specSubformRef);
    return (
      <>
        <div className="flex justify-content-space-between margin-bottom-10 margin-top-10 header-padding">
          <h1>Product Add</h1>
          <div className="flex align-self-center gap-20">
            <button onClick={()=>{
              // console.log(genSubformRef.current)
              // genSubformRef.current.helloWorld()
              // console.log(customSubformRef.current.validate() )
              // console.log(genSubformRef.current.validate() )
              axios.post("http://localhost/products-demo/api/index.php", genSubformRef.current.getFields() );
              // axios.post("http://localhost/products-demo/api/index.php", JSON.stringify(genSubformRef.current.getFields() ) );
            }}>Save</button>
            <button>Cancel</button>
          </div>
        </div>

        <div className="horizontal-line margin-bottom-10"></div>

        <div 
          className="form-div flex flex-direction-column header-padding-left"
        >
          <form id="product_form" >
            {/* <GenForm ref={genSubformRef} /> */}
            <GenSubform ref={genSubformRef} />
            <TypeSwitcher value={productType} handleChange={setProductType} />
            {/* <FormRegistry productType={productType} /> */}
            {/* <EnhancedNewDVD /> */}
            {/* <NewFormRegistry productType={productType} argRef={specSubformRef} /> */}
            {/* <DVDSubform /> */}
            {/* <BookSubform /> */}
            {/* <FurnitureSubform /> */}
            <SelectSubform productType={productType} argRef={customSubformRef}/>
        </form>
        </div>
      
      </>
    )
}
  
export default AddProduct
  