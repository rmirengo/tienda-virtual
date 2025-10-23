import React from 'react';
import './Item.css';

export const Item = ({name, price, description, imageUrl, children}) => {
    return (
        <article className="product-item">
            <img src={imageUrl} alt={description} />
            <h2 className="product-title">{name}</h2>
            <p className="product-price">Precio: ${price}</p>
            <p className="product-description">Descripción: {description}</p>
            {children}
        </article>
    );
};