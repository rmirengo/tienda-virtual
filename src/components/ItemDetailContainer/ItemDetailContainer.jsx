import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    
    const { id } = useParams();

    useEffect(() =>{
        fetch("/data/products.json")
        .then((res)=>{
            if (!res.ok) {
                throw new Error ("No se encontro el producto");
            }
            return res.json();
        })
        .then((data)=>{
            const found = data.find(prod => String(prod.id) === String(id))
            if (found) {
                setDetail(found);
            }else{
                throw new Error (`Producto con id ${id} encontrado`);
            }
        })
        .catch((err)=>{
            console.error(err);  
        });
    },[id]);

    return (
    <main className='item-detail-container'>   
        {Object.keys(detail).length ? (
            <ItemDetail detail={detail} />
        ) : (
            <p>Cargando...</p>
        )}
    </main> 
    );   
};