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
                <h2>Agregar Producto</h2>
                <div>
                    <label>Nombre: </label>
                    <input 
                        type="text" 
                        name="name" 
                        value= {product.name} 
                        onChange={onChange} 
                        required
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
                        required 
                    />
                    {errors.name && <p className="error">{errors.price}</p>}
                </div>
                <div>
                    <label>Categoria: </label>
                    <input 
                        type="text" 
                        name="category" 
                        value= {product.category} 
                        onChange={onChange} 
                        required
                    />
                    {errors.name && <p className="error">{errors.category}</p>}
                </div>
                    <div>
                    <label>Descripcion: </label>
                    <textarea                         
                        name="category" 
                        value= {product.description} 
                        onChange={onChange} 
                        required
                    />
                    {errors.name && <p className="error">{errors.description}</p>}
                </div>
                <div>
                    <label>Imagen: </label>
                    <input type="file" accept="image/*" name="image" onChange={(e)=> onFileChange(e.target.files?.[0] ?? null)} />
                    {errors.name && <p className="error">{errors.image}</p>}
                </div>
                <button className="btn" type="submit" disabled={loading}>
                    {loading ? "Guardando..." : "Guardar Producto"}
                </button>
            </form>
        </section>
    );
}