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
                <li className="nav__item">
                    <Link to="/products" className="nav__link">Productos</Link>
                </li>
                <li className="nav__item">                    
                    <Link to="/what" className="nav__link">What</Link> 
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