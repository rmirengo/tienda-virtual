// import { useState } from "react";
// import { deleteProduct } from "../../../services/products";


// const [isModalOpen, setIsModalOpen] = useState(false);
// const [productToDelete, setProductToDelete] = useState(null);

// const handleDeleteConfirmation = (id, name) => {
//     setProductToDelete({ id, name});
//     setIsModalOpen(true);
// };

// const ConfirmDelete = () => {
//     setIsModalOpen(false);

//     if (productToDelete) {
//         deleteProduct(productToDelete.id)
//         .then(()=>{
//             toast.success(`Producto "${productToDelete.name}" eliminado con éxito`)
//             loadProducts();
//         })
//         .catch(error=>{
//             toast.error("Fallo al eliminar el producto");
//             console.error("Error al eliminar.",error);
//         })
//         .finally(()=>{
//             setProductToDelete(null);
//         })
//     };
// }

// export default ConfirmationModal;

// src/components/adminComponents/ConfirmationModal/ConfirmationModal.jsx

import React from 'react';

// Es un componente funcional simple, sin Hooks (useState, etc.)
const ConfirmationModal = ({ isOpen, title, message, onConfirm, onCancel }) => {
    
    // 1. Si no está abierto, no renderiza nada
    if (!isOpen) {
        return null;
    }

    // 2. Renderiza la estructura visual del modal
    return (
        // Usaremos clases genéricas, ajusta estas a tus clases de Bootstrap
        <div className="modal-overlay" style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
            backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', 
            justifyContent: 'center', alignItems: 'center', zIndex: 1050, 
            pointerEvents:'none',
        }}>
            <div className="modal-dialog" style={{
                backgroundColor: 'white', padding: '20px', borderRadius: '8px', 
                width: '400px', maxWidth: '90%',
                pointerEvents:'auto',
            }}>
                
                <div className="modal-header">
                    <h5 className="modal-title">{title}</h5>
                    <button type="button" className="close-btn" onClick={onCancel}>&times;</button>
                </div>
                
                <div className="modal-body">
                    <p>{message}</p>
                </div>
                
                <div className="modal-footer" style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                    {/* Botón Cancelar (Llama a handleCancelDelete en el componente padre) */}
                    <button type="button" className="btn btn-secondary" onClick={onCancel}>
                        Cancelar
                    </button>
                    {/* Botón Confirmar (Llama a ConfirmDelete en el componente padre) */}
                    <button type="button" className="btn btn-danger" onClick={onConfirm}>
                        Sí, Confirmar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;