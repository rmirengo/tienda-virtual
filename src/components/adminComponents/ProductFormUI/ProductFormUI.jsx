import { Link } from "react-router-dom";
import "./ProductFormUI.css"

export const ProductFormUI = ({
    initialData={},
    product={}, 
    errors, 
    loading, 
    onChange, 
    onFileChange, 
    onSubmit,
}) => {
    return (
        <section>
            <form className="product-form" onSubmit={onSubmit}>
                <h3 className="product-form__title">Agregar Producto</h3>
                <div className="product-form__field-group">
                    <label>Nombre: </label>
                    <input 
                        type="text" 
                        name="name" 
                        value= {initialData.name || product.name || ""} 
                        onChange={onChange} 
                    />
                    {errors.name && <p className="product-form__error-message">{errors.name}</p>}
                </div>
                <div className="product-form__field-group">
                    <label>Precio:</label>
                    <input 
                        type="number" 
                        name="price" 
                        value={initialData.price || product.price} 
                        onChange={onChange} 
                    />
                    {errors.price && <p className="product-form__error-message">{errors.price}</p>}
                </div>
                <div className="product-form__field-group">
                    <label>Categoria: </label>
                    <input 
                        type="text" 
                        name="category" 
                        value= {initialData.category || product.category || ""} 
                        onChange={onChange} 
                    />
                    {errors.category && <p className="product-form__error-message">{errors.category}</p>}
                </div>
                    <div className="product-form__field-group">
                    <label>Descripcion: </label>
                    <textarea                         
                        name="description" 
                        value= {initialData.description || product.description || ""} 
                        onChange={onChange} 
                    />
                    {errors.description && <p className="product-form__error-message">{errors.description}</p>}
                </div>
                <div className="product-form__field-group">
                    <label>Imagen: </label>
                    <input 
                        type="file" 
                        accept="image/*" 
                        name="image" 
                        onChange={
                            (e)=> onFileChange(e.target.files?.[0] ?? null)
                            } 
                    />
                    {errors.image && <p className="product-form__error-message">{errors.image}</p>}
                </div>
                <div className="form-actions">
                <button 
                    className="form-btn form-btn-submit" 
                    type="submit" 
                    disabled={loading}>
                        {loading ? "Guardando..." : "Guardar Producto"}
                </button>
                <Link to="/admin" className="form-btn form-btn-cancel">
                        Cancelar y Volver
                    </Link>
                    </div>
            </form>
                    
        </section>
    );
}