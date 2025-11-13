import "./ProductFormUI.css"

export const ProductFormUI = ({
    product, 
    errors, 
    loading, 
    onChange, 
    onFileChange, 
    onSubmit,
}) => {
    return (
        <section>
            <form className="product-form" onSubmit={onSubmit}>
                <h3>Agregar Producto</h3>
                <div>
                    <label>Nombre: </label>
                    <input 
                        type="text" 
                        name="name" 
                        value= {product.name} 
                        onChange={onChange} 
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div>
                    <label>Precio:</label>
                    <input 
                        type="number" 
                        name="price" 
                        value={product.price} 
                        onChange={onChange} 
                    />
                    {errors.price && <p className="error">{errors.price}</p>}
                </div>
                <div>
                    <label>Categoria: </label>
                    <input 
                        type="text" 
                        name="category" 
                        value= {product.category} 
                        onChange={onChange} 
                    />
                    {errors.category && <p className="error">{errors.category}</p>}
                </div>
                    <div>
                    <label>Descripcion: </label>
                    <textarea                         
                        name="description" 
                        value= {product.description} 
                        onChange={onChange} 
                    />
                    {errors.description && <p className="error">{errors.description}</p>}
                </div>
                <div>
                    <label>Imagen: </label>
                    <input 
                        type="file" 
                        accept="image/*" 
                        name="image" 
                        onChange={
                            (e)=> onFileChange(e.target.files?.[0] ?? null)
                            } 
                    />
                    {errors.image && <p className="error">{errors.image}</p>}
                </div>
                <button 
                    className="btn" 
                    type="submit" 
                    disabled={loading}>
                        {loading ? "Guardando..." : "Guardar Producto"}
                </button>
            </form>
            {/* ///Aca iria un link para volver al dashboard */}
        </section>
    );
}