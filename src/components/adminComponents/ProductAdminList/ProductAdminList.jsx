import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "../../../services/products";
import toast from 'react-hot-toast';


export const ProductAdminList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


const loadProducts = () => {
    setLoading(true);
    getProducts(null)
        .then(data => {
            setProducts(data);
            console.log("Datos recibidos de la API en Admin:", data);
        })
        .catch(error => {
            toast.error("Error al cargar la lista de productos.");
            console.error("Error cargado productos para admin:",error);
        })
        .finally(()=> {
            setLoading(false);
        });        
};

useEffect(()=>{
    loadProducts();
},[]);

const handleDelete = (id, name) => {
   if (window.confirm(`¿Estás seguro de que queres eliminar el producto: ${name}"?`)) {
        deleteProduct(id)
        .then(()=>{
            toast.success(`Producto "${name}" eliminado con éxito`);
            loadProducts();
        })
        .catch(error => {
            toast.error("Fallo al eliminar el producto.");
            console.error("Error al eliminar:",error);
        });    
   }
};
if (loading) {
    return <p>Cargando productos del administrador...</p>;
}

return (
    <div className="admin-list-container">
        <h2>Gestión de Productos</h2>
        <Link to="/admin/alta-productos" className="btn btn-primary admin-add-btn">
            + Crear Nuevo Producto
        </Link>        

        {products.length === 0 ? (
            <p>No hay productos para mostrar.</p>
        ) : (
            <table className="admin-product-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>IMAGEN</th>
                        <th>NOMBRE</th>
                        <th>CATEGORIA</th>
                        <th>PRECIO</th>
                        <th>DESCRIPCION</th>                        
                        <th>ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(prod => (
                        <tr key={prod.id}>
                            <td>{prod.id}</td>
                            <td><img src={prod.imageUrl} alt={prod.name} style={{width: '50px'}} /></td>
                            <td>{prod.name}</td>
                            <td>{prod.category}</td>
                            <td>${prod.price}</td>
                            <td>{prod.description}</td>
                            <td>
                                <Link to={`/admin/update/${prod.id}`} className="btn btn-warning btn-sm">
                                    Editar
                                </Link>
                                <button
                                    onClick={()=> handleDelete(prod.id,prod.name)}
                                    className="btn btn-danger btn-sm admin-delete-btn">
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </div>
);
};