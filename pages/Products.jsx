import React, { useEffect, useRef, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SelectCard from "../component-registry/CardRegistry";
function Products() {
  
    const [data, setData] = useState([]);
    const checkedBoxes = useRef(new Set());
    const navigate=useNavigate();

    const handleBoxCheck=(sku,isCheck)=>{
      if(!isCheck) checkedBoxes.current.add(sku);
      else checkedBoxes.current.delete(sku);
    }
    useEffect(()=>{
      axios.get("http://eqdshin.atwebpages.com/api/")
      .then(response=>{
        // console.log(response);

        // you only need to sort them once
        setData(response.data.sort((a, b) => a.sku.localeCompare(b.sku) ) );
      })
      .catch(error=>{
        if(error.response?.status === 500){
          console.log(error);
        }
      })

    },[] )
    
    const handleMassDelete=()=>{
      /**
       * script doesn't trigger state to change in react
       * we will use a little bit of vanilla js to handle this
      */
      const checkboxes=document.getElementsByClassName('delete-checkbox');
      const fset=new Set();
      for (let i=0; i<checkboxes.length; i++) if(checkboxes[i].checked===true)fset.add(checkboxes[i].id);
      if(fset.size===0) return;
      
      axios.delete("http://eqdshin.atwebpages.com/api/", {data:Array.from(fset) } )
      .then(response=>{
        // console.log(response);

        const newData=data.filter(item => !fset.has(item.sku) );
        setData(newData );
      })
      .catch(error=>{
        if(error.response?.status === 500){
          console.log(error);
        }
      })

      // if(checkedBoxes.current.size === 0) return;
      // console.log(checkboxes);
      // axios.delete("http://eqdshin.atwebpages.com/api/", {data:Array.from(checkedBoxes.current) } )
      // .then(response=>{
      //   // console.log(response);
      //   // const newData=data.filter(item => !checkedBoxes.current.has(item.sku) );
      //   // setData(newData );
      //   // checkedBoxes.current.clear();
      //   const checkboxes = document.getElementsByClassName('delete-checkbox');
      //   console.log(checkboxes);
      // })
      // .catch(error=>{
      //   if(error.response?.status === 500){
      //     console.log(error.response);
      //   }
      // })
    }
    return (
      <>
        <div className="flex justify-content-space-between margin-bottom-10 margin-top-10 header-padding">
          <h1>Product List</h1>
          <div className="flex align-self-center gap-20">
            <button 
              onClick={()=>navigate('/add-product')}
            >
              ADD
            </button>
            <button 
              onClick={handleMassDelete}
              id="delete-product-btn"
            >
              MASS DELETE
            </button>
          </div>
        </div>
        <div className="horizontal-line"></div>
        <div className="product-grid">
          {
            data.map((en,i)=>{
              return <SelectCard key={en.sku} productType={en.type} props={en} handleChange={handleBoxCheck} />
            })
          }
        </div>
      </>
    )
  }
  
  export default Products
  