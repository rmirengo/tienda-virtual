import React from 'react';
import { useCartContext } from '../../context/CartContext/useCartContext';
import { Item } from "../Item/Item";
import './ItemDetail.css'; // Asegúrate de tener un archivo CSS para los estilos

export const ItemDetail = ({ detail }) => {
    
    const { addItem } = useCartContext();

    return (
        <Item {...detail}>
            <button 
                className="custom-button"
                onClick={() => 
                    addItem(detail)}
                    >
                Agregar al carrito
            </button>
        </Item>        
    );
};