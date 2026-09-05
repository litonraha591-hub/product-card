import { use, useState } from "react"
import type { ProductType } from "../Type"
import Product from "../Product/Product"
import './Products.css'

export type ProductsProps = {
    productsPromise: Promise<ProductType[]>
}

export default function Products({ productsPromise }: ProductsProps) {
    const products = use(productsPromise)
  const [cartProducts, setCartProducts]=useState<ProductType[]>([])
const handleCartUpdate = (product:ProductType):void =>{
    let newCartProducts = [...cartProducts, product]
    if(cartProducts.includes(product)){
        newCartProducts= cartProducts.filter(p=>p.id !== product.id)
    }
    setCartProducts(newCartProducts)
}

    return (
        <>
        <h1>Cart Items: {cartProducts.length}</h1>
      <div className="products">
         { products.map(product=><Product handleCartUpdate={handleCartUpdate} key={product.id} product={product}></Product> )}
      </div>
        </>
    )
}