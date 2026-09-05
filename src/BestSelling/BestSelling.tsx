import { use } from "react"
import type { ProductType } from "../Type"
// import './BestSelling.css'
import BestSell from "../BestSell/BestSell"
export type BestSellingProps = {
    product: ProductType
}

export default function BestSelling({ bestSellingPromise }: BestSellingProps) {
    const products = use(bestSellingPromise)
    console.log(products)
    return (
        <div className="product-container">{products.map(product=><BestSell  key = {product.id}product={product}></BestSell>) }</div>
   
    )
}