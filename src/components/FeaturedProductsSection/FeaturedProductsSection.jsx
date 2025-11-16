// src/components/FeaturedProductsSection/FeaturedProductsSection.jsx

import React, { useState, useEffect } from "react";
import { getProducts } from "../../services/products"; // Tu función de fetch
import CategoryCarousel from "../CategoryCarousel/CategoryCarousel"; // El componente que creamos antes
import './FeaturedProductsSection.css'
// No olvides importar FeaturedItemCard si lo estás usando directamente aquí.

// Las categorías que el negocio quiere destacar.
const MAX_FEATURED_CATEGORIES = 3;

const getRandomCategories = (categories, count) => {
    
    const shuffled = [...categories].sort(()=> 0.5 - Math.random());

    return shuffled.slice(0, count);
}



const FeaturedProductsSection = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [featuredCategories, setFeaturedCategories] = useState([]);

    // Lógica de carga de datos
    useEffect(() => {
        const fetchAndSelectCategories = async () => {
            try {
                // Traer todos los productos para filtrar en cliente
                const allProducts = await getProducts(); 
                setProducts(allProducts);

                const uniqueCategories = [...new Set(allProducts.map(p => p.category))];

                const selectedCategories = getRandomCategories(
                    uniqueCategories,
                    MAX_FEATURED_CATEGORIES
                );

                setFeaturedCategories(selectedCategories);

            } catch (err) {
                setError("No se pudieron cargar los productos o categorias destacados.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchAndSelectCategories();
    }, []);

    // Función de filtrado (filtrar por categoría y limitar la cantidad)
    const filterAndLimitProducts = (productsList, categoryName, limit = 8) => {
        // Asegúrate de que el campo 'category' en tus datos de mockapi coincida con 'categoryName'
        return productsList
            .filter(p => p.category === categoryName)
            .slice(0, limit);
    };

    if (loading) {
        return <p>Cargando productos destacados...</p>;
    }
    if (error) {
        return <p style={{color: 'red', textAlign: 'center'}}>Error: {error}</p>;
    }
    if (featuredCategories.length === 0) {
        return <p>No hay categorias disponibles para destacar</p>
    }
    
    return (
        <section className="featured-section">
            <h2>Productos destacados por categoría</h2>
            <div className="category-preview-carousels">
                
                {featuredCategories.map(categoryTitle => {
                    const featured = filterAndLimitProducts(products, categoryTitle);

                    return (
                        // Solo renderiza si hay productos en esa categoría
                        featured.length > 0 && (
                            <CategoryCarousel
                                key={categoryTitle}
                                title={categoryTitle}
                                products={featured}
                            />
                        )
                    );
                })}

            </div>
        </section>
    );
};

export default FeaturedProductsSection;