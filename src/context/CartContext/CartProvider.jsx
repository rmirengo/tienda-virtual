import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState();    

    const exists = (id) => {
        const exist = cart.some((p) => p.id === id);
        return exist;
    };

    const addItem = (Item) => {        
        if (exists(Item.id)) {
            alert("El producto ya está en el carrito");
            return;
        }

        setCart([...cart, Item]);
        alert(`${Item.name} agregado al carrito`);
    };

 
    const clearCart = () => {
        setCart([]);
    };

    const getTotalItems = () => {
        if (cart.length){
            return cart.length;
        }
    };

    const values = { 
        cart, 
        addItem, 
        clearCart, 
        getTotalItems,
    };
        
        return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};