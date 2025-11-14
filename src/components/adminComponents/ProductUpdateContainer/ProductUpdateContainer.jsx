import React  from "react";
import {useState, useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom";
import { getItem, updateProduct } from "../../../services/products";
import { ProductFormUI } from "../ProductFormUI/ProductFormUI";
import toast from 'react-hot-toast';
import { uploadToImgbb } from "../../../services/uploadImage";
import { ValidateProduct } from "../../../utils/validateProducts";

export const ProductUpdateContainer = ()=> {
        const { id } = useParams();
        const navigate = useNavigate();

        const [productData, setProductData] = useState(null);
        const [loading, setLoading] = useState(true);
        const [errors, setErrors] = useState({});
        const [file, setFile] = useState(null)

        useEffect(()=>{
            getItem(id)
                .then(data => {
                    setProductData(data);
                })
                .catch(error =>{
                    toast.error("Error al cargar datos del producto para edición.");
                    console.error("Error cargando producto para actualizar:",error);
                })
                .finally(()=>{
                    setLoading(false);
                });
        },[id]);

        const handleChange = (e) => {
            const { name, value } = e.target
                setProductData({...productData, [name]: value});
        }

        const handleSubmit = async (e) => {
            e.preventDefault();
            setErrors({});
            setLoading(true);
            
            const validationPayLoad = { ...productData, file };
            const newErrors = ValidateProduct(validationPayLoad);

            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                setLoading(false);
                return;
            }

            let imageUrl = productData.imageUrl;

            try {
                if (file) {
                    toast.loading('Subiendo imagen...');
                    imageUrl = await uploadToImgbb(file);
                    toast.dismiss();
                }

                const productDataToUpdate = {
                    ...productData,
                    price: Number(productData.price),
                    imageUrl,
                }

                const updatePromise = updateProduct(id, productDataToUpdate);

                toast.promise(updatePromise, {
                    loading: 'Actualizando producto...',
                    success: (updateProd) => {
                        navigate('/admin');
                        return `Producto "${updateProd.name}" actualizado con éxito.`;
                    },
                    error: (err) => {
                        setErrors({general: 'Error al actualizar el producto.'});
                        console.error("Error en la actualización:",err);
                        return 'Falló la actualización del producto.';
                    }
                });
            } catch (error) {
                setErrors({general: 'Error al subir la imagen.'});
                console.error("Error de subida de imagen;", error);
            } finally {
                setLoading(false);
            };
            
        };

        if (loading) {
            return <p className="loading-message">Cargando producto para edición...</p>;
        }

        if (!productData) {
            return <p>Producto no encontrado o error de carga.</p>
        }
        return (
            <ProductFormUI 
            initialData={productData}
            product={productData}
            errors={errors}
            loading={loading}
            onChange={handleChange}
            onFileChange={setFile}
            onSubmit={handleSubmit}
            isEditing={true}
            />
        );
    



}