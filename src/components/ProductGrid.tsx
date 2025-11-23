import React from 'react'
import jarImg from '../assets/jar.JPG'
import img120 from '../assets/120.JPG'
import img200 from '../assets/200.JPG'
import img250 from '../assets/250.JPG'

const ProductGrid: React.FC = () => {
  return (
    <section className="product-section">
      <div className="product-left">
        <img className="jar-large" alt="jar" src={jarImg} />
      </div>
      <div className="product-right">
        <h2>SPICY CRAVINGS<br/>CHILI GARLIC OIL</h2>
        <p className="lead">Spicy Cravings Chili Garlic Oil produces homemade chili garlic oil using high-quality garlic, oil, and siling demonyo — a native Filipino chili known for strong heat and aroma. Available in Original, Mild, and Extra Hot.</p>
        <button className="order-btn">Order Now</button>
        <div className="small-images">
          <img alt="120ml" src={img120} />
          <img alt="200ml" src={img200} />
          <img alt="250ml" src={img250} />
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
