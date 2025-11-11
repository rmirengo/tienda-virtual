export const ValidateProduct = (product, fileRequired = true) => {
    const errors = {};

    if (!product.name || product.name.trim() === "") {
        errors.name = "El nombre del producto es obligatorio.";
    }
    if (!product.description || product.description.trim() === "") {
        errors.description = "La descripción del producto es obligatoria.";
    }
    if product.price == null || isNaN(product.price) || product.price <= 0) {
        errors.price = "El precio del producto debe ser un número positivo.";
    }
    if product.category