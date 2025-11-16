import React from "react";
import ContactForm from "../ContactForm/ContactForm"
import MapEmbed from "../MapEmbed/MapEmbed";
import SocialLinks from "../SocialLinks/SocialLinks";

function ContactUs() {
    return(
        <div className="container py-5  border rounded shadow bg-white">
            <h1 className="text-center mb-5 text-secondary">Hablemos, estamos para ayudarte</h1>
                <div className="row row-cols-1 row-cols-lg-2 g-4 g-lg-5 align-items-start">
                    <div className="col"><ContactForm/></div>
                    <div className="col"><MapEmbed/></div>                    
            </div>  
            <div className="mt-5"><SocialLinks/></div>                             
        </div>
    )
} 

export default ContactUs;