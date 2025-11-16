import HeroParticles from "./HeroParticles";
import { Link } from "react-router-dom";

function Hero () {

    const LOGO_PATH = 'images/TechForge.png'

    return (
        <>
            <HeroParticles/>
            <div className="hero-content">
                <img src={LOGO_PATH} alt="HardCore PC Logo" className="hero-logo" />
                <h1 className="hero-title">Potencia sin lìmites para tu PC</h1>
                <h2 className="hero-subtitle">Componentes de alto rendimiento para gamers, creadores y entusiastas</h2>
                <Link to="/productos" className="btn btn-primary cta-button">
                     Explorá el catalogo
                </Link>
            </div>
        </>
    )
}

export default Hero;