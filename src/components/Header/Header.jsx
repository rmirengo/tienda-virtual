import './Header.css';
import { Link } from 'react-router-dom';

const LOGO_PATH = 'images/TechForge.png'
function Header(){
    return(
        <header className="header">
            <Link to="/">
            <img 
            src={LOGO_PATH}
            alt="Mi tiendita virtual con React/JS" 
            className="header__logo" 
            />
            </Link>
            <div className="header__text-container">
                <h1>¡Bienvenidos a mi nuevo sitio web con React!</h1>
                <p>Vamos a ver si sale algo bueno de todo esto</p>                
            </div>
        </header>
    );
};

export default Header;