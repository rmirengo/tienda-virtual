import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { getItem } from '../../services/products';

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() =>{
        setLoading(true);
        setDetail(null);
        
        getItem(id)
        .then((data)=>{
            if (data && data.id){
                setDetail(data);
            } else {
                throw new Error (`Producto con id ${id} no encontrado en la API.`);
            }
        })
        .catch((err)=>{
            console.error(err);  
        })
        .finally(()=>{
            setLoading(false);
        });
    },[id]);

    return (
    <main className='item-detail-container'>   
        {loading ? (
            <p>Cargando detalle del producto</p>
        ) : detail ? (
            <ItemDetail detail={detail} />
        ) : (<div>
            <h2>¿A donde queres ir máquina?</h2>
            <p>Error: Toda tu vida es un error.</p>
            </div>
        )}
    </main> 
    );   
};