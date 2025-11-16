import React, { useState, useEffect } from 'react';
// Importar Link desde react-router-dom para navegación interna
import { Link, NavLink } from 'react-router-dom'; 
import { useCartContext } from '../../context/CartContext/useCartContext';
import './Nav.css';
import { getCategories } from '../../services/products';

export const Nav = () => {
    const {getTotalItems} = useCartContext();   
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    useEffect(() => {
        getCategories()
            .then(data=> {
                setCategories(data);
            })
            .catch(error => {
                console.error("Fallo al cargar categorías:", error)
                setCategories([]);
            })
            .finally(()=> {
                setLoading(false);
            });

    },[]);

   const toggleSubmenu = (e) =>{
        // SOLO si la pantalla es <= 768px, previene la navegación y abre/cierra el submenú
        if(window.innerWidth <= 768){
            if(isSubmenuOpen){
            e.preventDefault(); 
            }
            e.stopPropagation();
            setIsSubmenuOpen(prev => !prev);
        }
    };

    const handleDropdownClick = (e) => {
        // En escritorio, permite que el Link navegue normalmente.
        // En móvil, llama a toggleSubmenu, el cual previene la navegación
        // y maneja el estado `isSubmenuOpen`.
        toggleSubmenu(e);
    };

    return (
        <nav className="navbar"> 
            <ul className="nav__list">
                <li className="nav__item">                 
                    <Link to="/" className="nav__link">Home</Link>
                </li>                
                {/* El Submenu de Categorias de Productos se genera automáticamente toma los datos de Mockapi*/}
                <li className="nav__item nav__item--dropdown"> 
                    <Link 
                        to="/productos" 
                        className="nav__link"
                        onClick={toggleSubmenu}
                        >
                            Productos {loading && ' (Cargando...) '}
                    </Link>
                    <ul className={`nav__submenu ${isSubmenuOpen ? 'submenu-active' : ''}`}> 
                        {!loading && categories.map(cat => (
                            <li key={cat}>
                                <NavLink
                                to={`/category/${cat}`}
                                className="nav__link">
                                    {cat}
                                </NavLink>
                        </li>
                        ))}                        
                    </ul>
                </li>
                <li className="nav__item">                    
                    <Link to="/contacto" className="nav__link">Contacto</Link> 
                </li>
                 <li className="nav__item">                    
                    <Link 
                        to="/carrito" 
                        className="nav__link">
                            Carrito
                    </Link>
                    {getTotalItems() > 0 && (
                        <span className="cart-badge">{getTotalItems()}</span>
                    )}
                </li>
            </ul>
        </nav>
    );
};