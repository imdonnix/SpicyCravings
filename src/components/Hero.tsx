import React from 'react'
import jarImg from '../assets/Pictures/jar.JPG'
import allImg from '../assets/Pictures/all.png'

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="hero">
      <div className="hero-overlay">
        <h1 className="hero-title">SPICY CRAVINGS -<br />CHILI GARLIC OIL</h1>
        <p className="hero-tagline">SPICE THAT IGNITES YOUR CRAVINGS!</p>
        <p className="hero-sub">Add spice to your meals — order now!</p>
        <button className="hero-cta" onClick={() => scrollToSection('order')}>Order Now</button>
        <div className="hero-jars">
          <img src={jarImg} alt="Spicy Cravings Jar" className="hero-jar-image" />
          <img src={allImg} alt="All Variants" className="hero-jar-image" />
        </div>
      </div>
    </header>
  )
}

export default Hero
