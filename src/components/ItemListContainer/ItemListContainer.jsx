import { useState, useEffect} from 'react'
import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../services/products';

export const ItemListContainer = ({ titulo }) => {
const[products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const { category } = useParams();

useEffect(() =>{
    setLoading(true);
    getProducts(category)
    .then((data) =>{
        setProducts(data);
        console.log("Productos cargados;", data.length)
    })
    .catch((err)=> {
        console.error("Error al cargar productos:", err);
        setProducts([]);
    })
    .finally(()=>{
        setLoading(false);
    })
    
},[category]);

    return (
        <section className="item-list-container">
            <h2>{category ? `Categoria: ${category}`: titulo}</h2>
        {loading ? (
            <p>Cargando productos...</p>
        ):(
            <ItemList list={products} />
        )}
        
    </section>
    )
}