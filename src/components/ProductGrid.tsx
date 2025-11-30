import React from 'react'
import img120 from '../assets/Pictures/120ml.png'
import img200 from '../assets/Pictures/200ml.png'
import img250 from '../assets/Pictures/250ml.png'
import chiliImg from '../assets/Pictures/chiligarlic.png'
import chiliImg2 from '../assets/Pictures/chiligarlic2.png'
import whyPeopleLoveUs from '../assets/Pictures/whypeopleloveus.png'
import orderImg from '../assets/Pictures/ordernow.png'
import howToUse from '../assets/Pictures/howtouseit.png'
import flavorsImg from '../assets/Pictures/flavors.JPG'

const ProductGrid: React.FC = () => {
  return (
    <>
      {/* ABOUT US SECTION */}
      <section className="about-section">
        <h2>ABOUT US PAGE</h2>
        <p className="about-intro">
          Spicy Cravings started in Tinga Itaas, Batangas City with a simple idea:<br/>
          <strong>"Every Filipino meal deserves flavor."</strong>
        </p>
        <p className="about-text">
          We use real garlic, fresh siling demonyo, and clean homemade preparation. Every jar is cooked with passion and sealed for freshness. Our goal is to make every meal more exciting, more flavorful, and more nakakagana at an affordable price.
        </p>
        <div className="about-jar">
          <img src={chiliImg} alt="Our Product" />
        </div>
      </section>

      {/* OUR PRODUCTS SECTION */}
      <section className="products-section">
        <div className="products-container">
          <div className="products-left">
            <button className="order-btn-left">Order Now</button>
            <div className="chili-image">
              <img src={chiliImg2} alt="Fresh Chili" />
            </div>
          </div>
          <div className="products-right">
            <h2>OUR PRODUCTS</h2>
            <p className="section-subtitle">We offer three sizes and three flavors to match your cravings</p>
            
            <div className="products-grid">
              <div className="product-card">
                <img src={img120} alt="120ml" className="product-image" />
                <h4 className="product-size">120ML – ₱120</h4>
              </div>
              <div className="product-card">
                <img src={img200} alt="200ml" className="product-image" />
                <h4 className="product-size">200ML – ₱160</h4>
              </div>
              <div className="product-card">
                <img src={img250} alt="250ml" className="product-image" />
                <h4 className="product-size">250ML – ₱190</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT DESCRIPTIONS SECTION */}
      <section className="product-descriptions-section">
        <h2>PRODUCT DESCRIPTIONS</h2>
        <div className="descriptions-grid">
          <div className="description-card">
            <h3>A. 120ML – BEST SELLER</h3>
            <p className="product-title">Spicy Cravings - Chili Garlic Oil 120ml</p>
            <p className="description-text">
              Perfect for personal use and everyday meals. Made with garlic, siling demonyo, and special seasonings, this size is great for trying out our flavor and adding a spicy kick to your dishes.
            </p>
          </div>
          <div className="description-card">
            <h3>B. 200ML – FAMILY SIZE</h3>
            <p className="product-title">Spicy Cravings Chili - Garlic Oil 200ml</p>
            <p className="description-text">
              Ideal for families who love spicy and savory flavors. More garlic, more chili, more enjoyment! Best for silog meals, noodles, fried rice, and everyday cooking.
            </p>
          </div>
          <div className="description-card">
            <h3>C. 250ML – VALUE SIZE</h3>
            <p className="product-title">Spicy Cravings - Chili Garlic Oil 250ml</p>
            <p className="description-text">
              Our biggest jar for heavy users and food business owners. Whether for restaurants, food stalls, or spicy lovers, this size delivers the best value and long-lasting flavor.
            </p>
          </div>
        </div>
      </section>

      {/* FLAVORS SECTION */}
      <section className="flavors-section">
        <img src={flavorsImg} alt="Flavor Options" className="flavors-image" />
      </section>

      <section className="why-choose-section">
        <div className="why-choose-container">
          <div className="why-choose-image">
            <img src={whyPeopleLoveUs} alt="Why Choose Us" />
          </div>
          <div className="why-choose-overlay">
            <h2>WHY CHOOSE US?</h2>
            <ul className="benefits-list">
              <li>✔ MADE WITH FRESH SILING DEMONYO</li>
              <li>✔ STRONG, CONSISTENT FLAVOR</li>
              <li>✔ HOMEMADE AND CLEAN PREPARATION</li>
              <li>✔ TAMPER-PROOF PACKAGING</li>
              <li>✔ PERFECT FOR HOME, RESTAURANTS, AND FOOD BUSINESS OWNERS</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW TO USE SECTION */}
      <section className="how-to-use-section">
        <img src={howToUse} alt="How to Use" className="how-to-use-image" />
      </section>

      {/* ORDER NOW & CONTACT SECTION */}
      <section id="order" className="order-section">
        <h2>Order Now</h2>
        <div className="order-content">
          <div className="order-left">
            <img src={orderImg} alt="Order" className="order-image" />
          </div>
          <div className="order-right">
            <h3>AVAILABLE VIA:</h3>
            <ul className="order-list">
              <li>
                <strong>FACEBOOK PAGE:</strong><br/>
                Spicy Cravings - Chili Garlic Oil
              </li>
              <li>
                <strong>FB MARKETPLACE</strong>
              </li>
              <li>
                <strong>DIRECT ORDERS:</strong><br/>
                0976-421-8146
              </li>
              <li>
                <strong>TINGA ITAAS, BATANGAS CITY</strong>
              </li>
            </ul>
            <button className="cta-button">Order Now</button>
          </div>
        </div>
      </section>

      {/* PRODUCT PROMO SECTION */}
      <section className="promo-section">
        <h2>PRODUCT PROMO</h2>
        <div className="promo-content">
          <p className="promo-text">
            <strong>"BUY 2 GET 1 PROMO!<br/>LIMITED TIME ONLY!"</strong>
          </p>
          <p className="promo-dates">DECEMBER 1 - 15, 2025</p>
        </div>
      </section>
    </>
  )
}

export default ProductGrid
