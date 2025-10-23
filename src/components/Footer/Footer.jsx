import React from 'react';
import './Footer.css'; // ¡No olvides importar tus estilos!

function Footer() {
  return (    
    <footer className="footer"> 
      <div className="footer__content">
        <p>Proyecto creado por Roberto Mirengo</p>
        <p>Curso React/JS Talento Tech 2025</p>
        <p>&copy; Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;