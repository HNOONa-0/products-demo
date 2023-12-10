import React, { useEffect, useState } from "react"
import axios from "axios";
// import SelectCard from "../components/component-registry/CardRegistry";
import { useNavigate } from "react-router-dom";
import SelectCard from "../component-registry/CardRegistry";
function Products() {
  
    const [data, setData] = useState([]);
    const [checkedBoxes,setCheckedBoxes]=useState(new Set() );
    const navigate=useNavigate();

    const handleBoxCheck=(sku,isCheck)=>{
      const newSet= new Set(checkedBoxes);
      if(!isCheck) newSet.add(sku)
      else newSet.delete(sku)
      setCheckedBoxes(newSet);
    }

    useEffect(()=>{
      axios.get("http://localhost/products-demo/api/index.php")
      .then(response=>{
        // you only need to sort them once
        console.log(response.data);
        setData(response.data.sort((a, b) => a.sku.localeCompare(b.sku) ) );
      })
      .catch(error=>{
        if(error.response?.status === 500){
          console.log(error.response.data);
        }
      })
    },[] )

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
              onClick={()=>{
                if(checkedBoxes.size == 0) return;
                axios.delete("http://localhost/products-demo/api/index.php", {data:Array.from(checkedBoxes) } )
                .then(response=>{
                  const newData=data.filter(item => !checkedBoxes.has(item.sku) );
                  setData(newData );
                  setCheckedBoxes(new Set() )
                })
                .catch(error=>{
                  if(error.response?.status === 500){
                    console.log(error);
                  }
                })
              }}
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
  