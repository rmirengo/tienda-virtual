import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "../../../services/products";
import toast from 'react-hot-toast';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
// import ConfirmationModal from '../ConfirmationModal/ConfirmationModal'
import { DeleteProductButton } from '../DeleteProductsButton/DeleteProductsButton';


export const ProductAdminList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [productToDelete, setProductToDelete] = useState(null);


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


// const handleDeleteConfirmation = (id,name)=>{
//         setProductToDelete({id, name});
//         setIsModalOpen(true);
// };

// const ConfirmDelete = () => {
//     setIsModalOpen(false);
//     if(!productToDelete) return;

//     const {id, name } = productToDelete;

//     deleteProduct(id)
//         .then(() => {
//             toast.success(`Producto "${name} eliminado con éxito`);
//             loadProducts();
//         })
//         .catch(error => {
//             toast.error("Fallo al eliminar el producto.");
//             console.error("Error al eliminar:",error);
//         })
//         .finally(()=>{
//             setProductToDelete(null);
//         });
// };  

// const handleCancelDelete = () =>{
//     setIsModalOpen(false);
//     setProductToDelete(null);
// }

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
    return ( 
        <div className="container mt-5 text-center">
            <div className="alert alert-info d-flex align-items-center justify-content-center">
                <div className="spinner-border spinner-border-sm me-2" role="status"></div>
                <strong>Cargando productos...</strong>;                
            </div>
        </div>
    );
}

return (
    <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">        
            <h2 className="text-primary">Administrador de productos</h2>
            <Link to="/admin/alta-productos" className="btn btn-primary d-flex align-items-center">
                <FaPlus className="me-2" />
                Agregar Nuevo Producto
            </Link>  
        </div>      

        {products.length === 0 ? (
            <div className="alert alert-warning text-center">
                No hay productos para mostrar.
            </div>
        ) : (
            <div className="table-responsive">
            <table className="table table-striped table-hover align-middle border shadow-sm">
                <thead className="table-primary">
                    <tr>
                        <th>Id</th>
                        <th>Imagen</th>
                        <th>Producto</th>
                        <th className="d-none d-md-table-cell">Categoria</th>
                        <th>Precio</th>
                        <th className="d-none d-lg-table-cell">Descripción</th>                        
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(prod => (
                        <tr key={prod.id}>
                            <td className="table-primary" style={{width: '5%'}}>{prod.id}</td>
                            <td style={{width: '8%'}}>
                                <img 
                                    src={prod.imageUrl} 
                                    alt={prod.name} 
                                    className="img-thumbail"
                                    style={{width: '50px', height: '50px', objectFit: 'cover'}} 
                                />
                            </td>
                            <td style={{width: '20%'}} className="fw-bold">{prod.name}</td>
                            <td className="d-none d-md-table-cell" style={{width: '15%'}}>{prod.category}</td>
                            <td style={{width: '10%'}} className="text-success fw-bold">${prod.price}</td>
                            <td className="d-none d-lg-table-cell" style={{width: '30%'}}>{prod.description}</td>
                            <td style={{width: '12%'}}>
                                <Link 
                                    to={`/admin/update/${prod.id}`} 
                                    className="btn btn-warning btn-sm me-2">
                                    <FaEdit/>
                                </Link>
                            <DeleteProductButton
                            productId={prod.id} 
                            productName={prod.name} 
                            reloadList={loadProducts} // Pasamos la función de recarga
                        />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        )}    
        
    
    {/* {isModalOpen && productToDelete && (
        <ConfirmationModal
            isOpen={isModalOpen}
            title="Confirmar Eliminación"
            message={`¿Estás seguro de que deseas eliminar el producto: "${productToDelete.name}"? Ésta acción es iireversible`}
            onConfirm={confirmDelete}
            onCancel={handleCancelDelete}
        />
    )} */}
    </div>
);
};