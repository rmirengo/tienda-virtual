import { useState } from "react";
import { uploadToImgbb} from "../../../services/uploadImage";
import { ProductFormUI } from "../ProductFormUI/ProductFormUI";
import { ValidateProduct } from "../../../utils/validateProducts";



export const ProductFormContainer = () => {
    const [loading, setLoading] = useState();
    const [file, setFile] = useState(null);
    const [product, setProduct] = useState({
        name: "",
        price: "",
        category: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});
        setLoading (true);

        const newErrors = ValidateProduct(...product, file );
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }
        try{
            const imageUrl = await uploadToImgbb()
            const productData ={
                ...product,Number(product.price),imageUrl
            };

        await createProduct(productData);
        alert("Producto cargado con exito");

        setProduct({name: "", price: "". category:"",description=""});
        setFile(null);        

        } catch(error){
            setErrors({general: error.message});
        }
        
    };

    return (<section>
        <h2>Formulario de Producto</h2>
        <ProductFormUI 
            product={product} 
            errors={errors} 
            onChange={handleChange} 
            onFileChange={setFile}
            loading={loading} 
            onSubmit={handleSubmit}/>
    </section>
    );
}