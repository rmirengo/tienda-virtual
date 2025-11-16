import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import { Item } from "../Item/Item";
import "./Cart.css";
import { FaTrashAlt} from 'react-icons/fa'

export const Cart = () => {
    const {cart, clearCart, deleteItem, total, checkout} = useCartContext();

return (<section className="item-list-container">
        <h2>Carrito de Compras</h2>

        {cart.length ? (
            <div className="cart-items-list">
                {cart.map((prod)=> (
                    <Item key={prod.id} {...prod}>
                        <span>Cantidad: {prod.quantity}</span>
                        <button className="btn btn-delete" onClick={()=>deleteItem(prod.id)}>
                            <FaTrashAlt />
                        </button>
                    </Item>
                ))}
            </div>
        ) : (
            <p>Tu carrito está vacio, deberias pensar comprar algo!</p>
        )}

{cart.length ? (
            <div className="btn-container">
                <div className="total-pagar">
                    <p>Total a pagar: ${total()}</p>
                </div>
            <button className="btn btn-primary" onClick={checkout}>
                Finalizar Compra
            </button>
            <button className="btn btn-danger" onClick={clearCart}>
                Vaciar Carrito
            </button>
            </div>
            ) : (
            <Link className="btn btn-primary" to="/productos">
                Volver a la tienda
            </Link>
        )}
    </section>
    );
};