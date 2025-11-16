import React from "react";
import {FaFacebook, FaInstagram, FaTwitter,FaLinkedin} from 'react-icons/fa'

function SocialLinks (){
    const iconStyle = {fontSize: '2em', margin: '0 10px', color: '#333'};

    return (
        <div className="my-4 border-top">
            <h4 className="text-center mb-3">Seguinos en nuestras redes:</h4>
            <div className="d-flex justify-content-center mt-2">
                {/* Facebook */}
                <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2">
                    <FaFacebook style= {{ ...iconStyle, color: '#4267B2' }} />
                </a>
                {/* Instagram */}
                <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2">
                    <FaInstagram style= {{ ...iconStyle, color: '#C13584' }} />
                </a>
                {/* Twitter */}
                <a
                    href="https://www.x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2">
                    <FaTwitter style= {{ ...iconStyle, color: '#1DA1F2' }} />
                </a>
                    {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2">
                    <FaLinkedin style= {{ ...iconStyle, color: '#1DA1F2' }} />
                </a>
            </div>
        </div>
    );
}

export default SocialLinks;