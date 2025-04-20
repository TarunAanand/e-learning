import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/hero.css';
import Footer from './Footer';
import HeaderNew from './Header/HeaderNew';

const Hero = () => {

  const nav = useNavigate();
  const handleGetStarted = () => {
    nav("/courses")
  }
  return (
    <>
      <HeaderNew />
      <section className="hero">
      <div className="container hero-container">
        <h1 className="hero-title">KNOW</h1>
        <p className="hero-description">Expand your knowledge with our curated courses designed for modern learners.</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Browse Courses</button>
        </div>
      </div>
    </section>
      <Footer />
    </>
  )
}

export default Hero