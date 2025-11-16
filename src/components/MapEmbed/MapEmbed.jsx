import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

function MapEmbed (){

    const iconStyle = { 
        fontSize: '1.2 em', 
        color: '#6c757d',
        verticalAlign: 'middle'
    };

    return(
    <div className="p-3">
        <h3 className="mb-3 text-center text-primary">Nuestra ubicación</h3>
        <div className="ratio ratio-16x9 mb-4">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26285.83412239244!2d-58.494156800000006!3d-34.5604096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1763175970913!5m2!1ses!2sar" 
            width="600" 
            height="450" 
            style={{border:0}} 
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
        <div className="p-3">
            <div className="d-flex align-items-center mb-3 border-bottom pb-2">
                <FaMapMarkerAlt style={iconStyle} className="me-3" />
                <p className="mb-0 text-muted small">Calle Falsa 1234, Ciudad Autonoma de Bs.As., Argentina</p>
            </div>
            <div className="d-flex align-items-center mb-3 border-bottom pb-2">
                <FaPhone style={iconStyle} className="me-3" />  
                <p className="mb-0 text-muted small">(+54)11-1234-5678</p>
            </div>
            <div className="d-flex align-items-center mb-3 border-bottom pb-2">
                <FaEnvelope style={iconStyle} className="me-3" />
                <p className="mb-0 text-muted small">correo@electronico.com</p>
            </div>
            <div className="d-flex align-items-center mb-0 pb-2">
                <FaClock style={iconStyle} className="me-3" />
                <p className="mb-0 text-muted small">Lunes - Viernes: 08:00 AM - 04:00 PM</p>
            </div>            
        </div>
    </div>
    )
}

export default MapEmbed;