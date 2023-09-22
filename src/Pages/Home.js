import React, { useEffect } from 'react'
import Products from '../Components/Products'
import { useSelector ,useDispatch} from 'react-redux'
import { fetchProducts } from '../store.js/products/productActions'


function Home() {
  const products= useSelector(state=>state.productList)

  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  return (
    <div>
    
    <Products products={products}/>
    </div>
  )
}

export default Home