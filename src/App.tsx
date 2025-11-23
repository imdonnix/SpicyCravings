import React from 'react'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import BusinessPlan from './components/BusinessPlan'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <div className="page-root">
      <Hero />
      <main className="container">
        <ProductGrid />
        <BusinessPlan />
      </main>
      <Footer />
    </div>
  )
}

export default App
