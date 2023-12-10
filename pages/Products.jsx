import React, { useState } from "react"
import Product from "../components/Product"

function Products() {
    const [count, setCount] = useState(0);
    return (
      <>
        <div className="flex justify-content-space-between margin-bottom-10 margin-top-10 header-padding">
          <h1>Product List</h1>
          <div className="flex align-self-center gap-20">
            <button>ADD</button>
            <button>MASS DELETE</button>
          </div>
        </div>
        <div className="horizontal-line"></div>
        <div className="product-grid">
          {/* <div class="product-item">Product 1</div>
          <div class="product-item">Product 2</div>
          <div class="product-item">Product 3</div>
          <div class="product-item">Product 4</div>
          <div class="product-item">Product 5</div> */}
          {/* <div class="product-item">Product 6</div> */}
          <Product sku="JVC200123" name="Acme DISC" price="1.00" size="700MB" />
          <Product sku="JVC200123" name="Acme DISC" price="1.00" size="700MB" />
          <Product sku="JVC200123" name="Acme DISC" price="1.00" size="700MB" />
          <Product sku="JVC200123" name="Acme DISC" price="1.00" size="700MB" />
          <Product sku="JVC200123" name="Acme DISC" price="1.00" size="700MB" />
          <Product sku="JVC200123" name="Acme DISC" price="1.00" size="700MB" />
          <Product sku="JVC200123" name="Acme DISC" price="1.00" size="700MB" />
          <Product sku="JVC200123" name="Acme DISC" price="1.00" size="700MB" />
          <Product sku="JVC200123" name="Acme DISC" price="1.00" size="700MB" />
          <Product sku="JVC200123" name="Acme DISC" price="1.00" size="700MB" />
        </div>
      </>
    )
  }
  
  export default Products
  