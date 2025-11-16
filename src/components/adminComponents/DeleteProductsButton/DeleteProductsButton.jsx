// src/components/adminComponents/DeleteProductButton.jsx
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaTrash } from 'react-icons/fa';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal'; 
import { deleteProduct } from '../../../services/products';

// Recibe los datos del producto y la función de recarga como props
export const DeleteProductButton = ({ productId, productName, reloadList }) => {
    
    // 1. Lógica de estado y modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDeleteConfirmation = () => {
        setIsModalOpen(true);
    };

    const confirmDelete = () => {
        setIsModalOpen(false);

        deleteProduct(productId)
            .then(() => {
                toast.success(`Producto "${productName}" eliminado con éxito`);
                // 2. Llama a la función que recarga la lista en el componente padre
                reloadList(); 
            })
            .catch(error => {
                toast.error("Fallo al eliminar el producto.");
                console.error("Error al eliminar:", error);
            });
    };
    
    const handleCancelDelete = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {/* Botón de la lista */}
            <button
                onClick={handleDeleteConfirmation}
                className="btn btn-danger btn-sm"
            >
                <FaTrash/>
            </button>
            
            {/* Renderizado del Modal */}
            {isModalOpen && (
                <ConfirmationModal
                    isOpen={isModalOpen}
                    title="Confirmar Eliminación"
                    message={`¿Estás seguro de que deseas eliminar el producto: "${productName}"? Esta acción es irreversible.`}
                    onConfirm={confirmDelete}
                    onCancel={handleCancelDelete}
                />
            )}
        </>
    );
};