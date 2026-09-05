import type { ProductType } from "../Type"
// import './BestSell.css'
export type BestSellProps = {
    product: ProductType
}

export default function BestSell({ product }: BestSellProps) {
    
    return (
       
     <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </div>

      <div className="product-content">
        <p className="product-category">
          {product.category}
        </p>

        <h2 className="product-title">
          {product.title}
        </h2>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-bottom">
          <h3 className="product-price">
            ${product.price}
          </h3>

          <div className="product-rating">
            ⭐ {product.rating.rate}
            <span>({product.rating.count})</span>
          </div>
        </div>

        <button className="cart-button">
          Add to Cart
        </button>
      </div>
    </div>
    )
}