import React from 'react'

const Section: React.FC<{title?: string, children: React.ReactNode}> = ({title, children}) => (
  <section className="bp-section">
    {title && <h3>{title}</h3>}
    <div>{children}</div>
  </section>
)

const BusinessPlan: React.FC = () => {
  return (
    <article className="business-plan">
      <h2>Spicy Cravings — Product & Brand</h2>

      <Section title="Logo Description">
        <p>
          The Spicy Cravings logo features a bold and attractive design showing fresh garlic bulbs and red chili peppers arranged in a circular emblem. The warm color palette of red, orange, and white reflects heat, flavor, and homemade quality. The name “Spicy Cravings Chili Garlic Oil” wraps around the emblem, giving it a premium, handcrafted look. This logo represents strong flavor, Filipino spice, and high-quality homemade condiments.
        </p>
      </Section>

      <Section title="Product Descriptions">
        <h4>A. 120ml – Best Seller</h4>
        <p><strong>Spicy Cravings Chili Garlic Oil 120ml</strong><br/>Perfect for personal use and everyday meals. Made with garlic, siling demonyo, and special seasonings, this size is great for trying out our flavor and adding a spicy kick to your dishes.</p>

        <h4>B. 200ml – Family Size</h4>
        <p><strong>Spicy Cravings Chili Garlic Oil 200ml</strong><br/>Ideal for families who love spicy and savory flavors. More garlic, more chili, more enjoyment! Best for silog meals, noodles, fried rice, and everyday cooking.</p>

        <h4>C. 250ml – Value Size</h4>
        <p><strong>Spicy Cravings Chili Garlic Oil 250ml</strong><br/>Our biggest jar for heavy users and food business owners. Whether for restaurants, food stalls, or spicy lovers, this size delivers the best value and long-lasting flavor.</p>

        <h4>Flavor Options</h4>
        <ul>
          <li>Original Spicy – Balanced heat & garlic aroma</li>
          <li>Mild Spicy – Subtle heat, strong flavor</li>
          <li>Extra Hot – Intense heat for spice lovers</li>
        </ul>
      </Section>

      <Section title="About Us">
        <p>
          Spicy Cravings is a home-based chili garlic oil brand from Tinga Itaas, Batangas City. We make fresh, flavorful, and homemade chili garlic oil using siling demonyo, garlic, oil, and special seasonings. Every jar is cooked, bottled, and sealed with care to bring you quality Filipino flavors.
        </p>
        <p>
          Our goal is simple: to make every meal more exciting, more flavorful, and more nakakagana.
        </p>
      </Section>

      <Section title="Our Products">
        <p>We offer three sizes and three flavors to match your cravings:</p>
        <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
          <div>
            <strong>Sizes:</strong>
            <ul>
              <li>120ml</li>
              <li>200ml</li>
              <li>250ml</li>
            </ul>
          </div>
          <div>
            <strong>Flavors:</strong>
            <ul>
              <li>Original Spicy</li>
              <li>Mild Spicy</li>
              <li>Extra Hot</li>
            </ul>
          </div>
        </div>

        <p>Perfect for silog meals, siomai, pancit, noodles, fried rice, ulam, and dipping sauces.</p>
      </Section>

      <Section title="Why Choose Us?">
        <ul>
          <li>Made with fresh siling demonyo</li>
          <li>Strong, consistent flavor</li>
          <li>Homemade and clean preparation</li>
          <li>Tamper-proof packaging</li>
          <li>Perfect for home, restaurants, and food business owners</li>
        </ul>
      </Section>

      <Section title="Order Now">
        <p><strong>Available via:</strong></p>
        <ul>
          <li>📦 Facebook Page</li>
          <li>📦 Shopee / TikTok Shop / Marketplace</li>
          <li>📦 Direct orders: <strong>0976-421-8146</strong></li>
          <li>📍 Tinga Itaas, Batangas City</li>
        </ul>
        <p>“Your favorite chili garlic oil is here!”</p>
        <p>“Silog? Noodles? Siomai? Make it better with Spicy Cravings Chili Garlic Oil!”</p>
      </Section>

      <Section title="Promotions & Launch">
        <p>For Product Launch / Promo</p>
        <ul>
          <li>“Buy 2 Get 1 Promo! Limited time only!”</li>
          <li>“Start your week with flavor—Order now!”</li>
          <li>“Looking for resellers! PM us for pricing.”</li>
        </ul>
      </Section>

      <Section>
        <p style={{fontStyle:'italic'}}>“Where chili meets garlic perfection.”</p>
      </Section>
    </article>
  )
}

export default BusinessPlan
