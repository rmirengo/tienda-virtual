import React from 'react';
import { useCartContext } from "../../context/CartContext/useCartContext";
import { Item } from "../Item/Item";
import { Count } from "../Count/Count";
import "./ItemDetail.css"; // Asegúrate de tener un archivo CSS para los estilos

export const ItemDetail = ({ detail }) => {    
    const { addItem } = useCartContext();
    
    const handleAdd = (quantity) => {
        addItem({...detail, quantity});
    };

    return (
        <Item {...detail}>
            <Count btnText={"Agregar al carrito"} onConfirm={handleAdd}/>
        {/* <button className="custom-button" onClick={() =>  addItem(detail)}>Agregar al carrito</button> */}
        </Item>        
    );
};