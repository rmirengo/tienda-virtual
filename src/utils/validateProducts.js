//funcion para validar los datos que se cargan en el formulario de carga de productos

export const ValidateProduct = (product, fileRequired=true) => {
    const errors = {} 

    // 1. Validacion del nombre
    // trim() y comprobacion de valor falsy
    if (!product.name || String(product.name).trim() === "") {
        errors.name = "El nombre del producto es obligatorio.";
    }
    
    // 2. Validacion del Precio
    // Valida valor nulo, sin definir y luego el valor numerico
    if (product.price === null || product.price === undefined || isNaN(product.price) || product.price <= 0) {
        errors.price = "El precio del producto debe ser un número positivo.";
    }

    // 3. Validacion de la descripción
    
    if (!product.description || String(product.description).trim() === "") {
        errors.description = "La descripción del producto es obligatoria.";
    }
    
    // 4. Validacion de la categoría
    
    if (!product.category ||String(product.category).trim()===""){
        errors.category = "La categoria es Obligatoria";
    }

    // 5. Validacion del Archivo/Imagen (Depende del fileRequired)
    
    if (fileRequired && !product.file && !product.imageUrl){
        errors.file ="Debes seleccionar una imagen";
    }

    return errors;
};