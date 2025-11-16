import React from "react";
import FeaturedItemCard from "../FeaturedItemCard/FeaturedItemCard";
import { Link } from "react-router-dom";
import './CategoryCarousel.css'

const CategoryCarousel = ({title, products}) => {

    if (!products || products.length === 0) return null;

    const categoryUrl = `/category/${title.toLowerCase().replace(/\s/g, '-')}`;

    return (
        <div className="category-carousel-section">
            <div className="carousel-header"></div>
                <h3>{title}</h3>
                <Link to={categoryUrl} className="view-more-link">
                    Ver Mas
                </Link>
            <div className="carousel-wrapper">
                {products.map(product =>(
                    <FeaturedItemCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    )
}

export default CategoryCarousel;