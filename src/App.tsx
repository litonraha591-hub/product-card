
import { Suspense } from 'react';
import './App.css'
import Products from './Products/Products';
const productsPromise = async()=>{
const res =await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  return data;

}

function App() {
 

  return (
    <>
     <Suspense fallback={<h1>Loading......</h1>}>
    <Products productsPromise={productsPromise()}></Products>

     </Suspense>

    
    </>
  )
}

export default App
