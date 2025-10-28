import React from 'react';
// Importar Link desde react-router-dom para navegación interna
import { Link } from 'react-router-dom'; 
import { useCartContext } from '../../context/CartContext/useCartContext';
import './Nav.css';

export const Nav = () => {
    const {getTotalItems} = useCartContext();   

    return (
        <nav className="navbar"> 
            <ul className="nav__list">
                <li className="nav__item">                 
                    <Link to="/" className="nav__link">Home</Link>
                </li>
                <li className="nav__item nav__item--dropdown"> 
                    <Link to="/productos" className="nav__link">Productos</Link>
                    <ul className="nav__submenu"> 
                        <li>
                            <Link to="/productos/libreria" className="nav__link">Librería</Link>
                        </li>
                        <li>
                            <Link to="/productos/bazar" className="nav__link">Bazar</Link>
                        </li>
                    </ul>
                </li>
                <li className="nav__item">                    
                    <Link to="/what" className="nav__link">Contacto</Link> 
                </li>
                 <li className="nav__item">                    
                    <Link to="/cart" className="nav__link">Carrito</Link>
                    {getTotalItems() > 0 && (
                        <span className="cart-badge">{getTotalItems()}</span>
                    )}
                </li>
            </ul>
        </nav>
    );
};