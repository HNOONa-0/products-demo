import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from '../components/Product'
import Products from '../pages/Products'
import AddProduct from '../pages/AddProduct'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Products /> */}
      <AddProduct />
    </>
  )
}

export default App
