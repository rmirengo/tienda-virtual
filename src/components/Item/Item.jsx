import React from 'react';
import './Item.css';
import { formatCurrency } from '../../utils/formatters';

export const Item = ({name, price, description, imageUrl, children}) => {
       
    const formattedPrice = formatCurrency(price, 'USD', 'es-AR');  

    return (
        <article className="product-item">
            <img src={imageUrl} alt={description} />
            <h2 className="product-title">{name}</h2>
            <p className="product-price">Precio {formattedPrice}</p>
            <p className="product-description">Descripción: {description}</p>
            {children}
        </article>
    );
};