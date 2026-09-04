import { use } from "react"
import type { ProductType } from "../Type"
import Product from "../Product/Product"
import './Products.css'

export type ProductsProps = {
    productsPromise: Promise<ProductType[]>
}

export default function Products({ productsPromise }: ProductsProps) {
    const products = use(productsPromise)
    console.log(products)
    return (
        <>
      <div className="products">
         { products.map(product=><Product key={product.id} product={product}></Product> )}
      </div>
        </>
    )
}