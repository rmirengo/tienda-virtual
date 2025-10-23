import { useState, useEffect} from 'react'
import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.css';

export const ItemListContainer = () => {
const[products, setProducts] = useState([]);

useEffect(() =>{
    fetch("/data/products.json")
    .then((res) =>{
        if (!res.ok) {
            throw new Error ("Aca paso algo raro y no funciono la peticion");
        }
        return res.json();
    })
    .then((data) =>{
        setProducts(data);
    })
    .catch((err) =>{
        console.log(err);
    });
},[])


    return <section className="item-list-container">
        <h2>Nuestros Productos</h2>
        <ItemList list={products} />
    </section>
}