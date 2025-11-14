const BASE_URL = 'https://6900bc6aff8d792314bb39bc.mockapi.io/products';

/// Lógica para crear un producto

export const createProduct = async (product) => {    
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: { "content-type" : "application/json" },
        body: JSON.stringify(product)
    });
    
    if (!res.ok) {
        throw new Error('Error al crear el producto');
    }

    const result = await res.json();
    return result;

};

// Logica para obtener productos de mockapi

export const getProducts = async(category) => {
    let url = BASE_URL;  

    if (category) {
        url = `${BASE_URL}?category=${category}`;
}
try {
    const res = await fetch(url);
    if(!res.ok) {
    throw new Error ("Error al listar productos");
    }
    const result = await res.json();
    return result;
} 
catch (error) {
    console.error("Fallo en getProducts:",error)
    throw error;
}
}

//Logica para obtener el detalle de producto por id

export const getItem = async (id) => {
    try {
        const url = `${BASE_URL}/${id}`;
        const res = await fetch(url);

        if (!res.ok){
            throw new Error (`Producto no encontrado o error en la petición. Código: ${res.status}`);
        }
        const result = await res.json();
        return result;
    } catch(error){
        console.error("Fallo en getItem:", error)
        throw error;
    }
};

// Logica para tomar solo las categorias de mockapi

export const getCategories = async() => {
    try {
        const allProducts = await getProducts();
        
        if (!allProducts || allProducts.lenght === 0) {
            return [];
        }

        const categoriesArray = allProducts.map(prod => prod.category);

        const uniqueCategories = [...new Set(categoriesArray)];

        return uniqueCategories;
    } catch (error){
        console.error("Error al obtener categorias: ", error);
        throw error;
    }
}
// Logica para actualizar productos
export const updateProduct = async (id, updatedProductData) => {
    const url = `${BASE_URL}/${id}`;

    const res = await fetch (url, {
        method: 'PUT', // SE USA EL METODO PUT PARA ACTUALIZAR}
        headers: { "content-type" : "application/json"},
        body: JSON.stringify(updatedProductData)
    });
    if (!res.ok) {
        throw new Error(`Error al actualizar el producto con ID: ${id}. Código: ${res.status} `);
    }
    const result = await res.json();
    return result;
};

/// Logica para eliminar un producto

export const deleteProduct = async (id) => {
    const url = `${BASE_URL}/${id}`;

    const res = await fetch(url, {
        method: 'DELETE', //EL METODO DELETE PARA ELIMINAR PRODUCTOS
    });

    if (!res.ok) {
        throw new Error(`Error al eliminar el producto con ID: ${id}. Código: ${res.status}`);
    }

    const result = await res.json();
    return result;

}
