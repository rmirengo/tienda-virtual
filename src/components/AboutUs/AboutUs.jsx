import React from "react";
import { Link } from "react-router-dom";

function AboutUs(){
    
return(
    <>
        <div className="about-content">
            <div className="about-text">
                <h2 className="section-title">¿Quiénes Somos?</h2>
                <p>En <strong>TechForge - HardCore PC</strong> somos fanáticos del rendimiento. Desde 2015, ayudamos a gamers, creadores y entusiastas a armar sus máquinas ideales. Nos apasiona el hardware, y lo demostramos en cada producto, cada asesoramiento y cada entrega.
                </p>
                <p>Trabajamos con las marcas más reconocidas del mercado y ofrecemos garantía oficial, envíos a todo el país y atención personalizada.
                </p>
                <Link to="/contacto" className="btn btn-secondary">
                    Ponete en contacto con nosotros
                </Link>
            </div>
                <div className="about-image">
                    <img src="/public/images/Team.png" alt="Equipo de TechForge - HardCore PC" />
                </div>
            </div>
    </>
)
}

export default AboutUs;