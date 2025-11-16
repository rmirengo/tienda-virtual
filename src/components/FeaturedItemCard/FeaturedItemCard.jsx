import React from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatters';
import './FeaturedItemCard.css';

const FeaturedItemCard = ({product}) => {
    const {id, name, price, imageUrl} = product;

    const formattedPrice = formatCurrency(price, 'USD', 'es-AR');

    return (
        <Link to={`/detail/${id}`} className="featured-item-card">
            <div className="card-image-container">
                <img src={imageUrl} alt={name} className='product-image' />
            </div>
            <div className="card-info">
                <h4 className="card-name">{name}</h4>
                <p className="card-price">{formattedPrice}</p>
            </div>
        </Link>
    )
}

export default FeaturedItemCard;