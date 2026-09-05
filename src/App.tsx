
import { Suspense, useState } from 'react';
import './App.css'
import Products from './Products/Products';
import BestSelling from './BestSelling/BestSelling';
const productsPromise = async()=>{
const res =await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  return data;
}
const bestSellingPromise = async()=>{
const res =await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  return data;

}

function App() {
//  const [count, setCount]= useState(0);
//  const handleCount = ()=>{
//   setCount(count+1)
//  }

  return (
    <>
    {/* <div>Count {count}</div>
    <button onClick={handleCount}>increase count</button> */}
     <Suspense fallback={<h1>Loading......</h1>}>
    <Products productsPromise={productsPromise()}></Products>

    <h1>Best Selling</h1>
    <BestSelling bestSellingPromise={bestSellingPromise()}></BestSelling>

     </Suspense>

    
    </>
  )
}

export default App
