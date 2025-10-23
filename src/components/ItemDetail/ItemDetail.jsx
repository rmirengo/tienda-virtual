import { Item } from "../Item/Item";

export const ItemDetail = ({ detail }) => {


    return (
        <Item {...detail}>
            <button>Agregar al carrito</button>
        </Item>
    );
};