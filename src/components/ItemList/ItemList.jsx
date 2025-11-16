import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import './ItemList.css';

export const ItemList = ({list}) => {
    return (
        <div className="products-grid">
            {list.length ? (
                list.map((prod)=> (
                <Link to={`/detail/${prod.id}`} key={prod.id} className="item-link">
                    <Item {...prod} />                
                </Link>
                ))
            ) : (
                <p>No hay nada para mostrar</p>
            )}
        </div>
    );
};