import React from "react"
import { Link } from "react-router-dom"
import HeroParticles from "../Hero/HeroParticles"
import "./Home.css"
import Hero from "../Hero/Hero"
import AboutUs from "../AboutUs/AboutUs"
import FeaturedProductsSection from "../FeaturedProductsSection/FeaturedProductsSection"


const Home = () => {
    return (
        <main className="home-page-container">            
            <section className="hero-section">
                <Hero />
            </section>

            <section className="featured-section">
                <FeaturedProductsSection/>
            </section>

            <section className="about-section">
                <AboutUs />
            </section>

        </main>

    )
}

export default Home;