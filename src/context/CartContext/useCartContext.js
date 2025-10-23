import { useContext } from "react"; 
import { CartContext } from "./CartContext";


export const useCartContext = () => {
    return useContext(CartContext);// Aquí iría la lógica para manejar el carrito de compras
}