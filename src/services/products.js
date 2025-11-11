const BASE_URL = 'https://6900bc6aff8d792314bb39bc.mockapi.io/products';

const createProduct = async (product) => {
    // Lógica para crear un producto
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify(product)
    });
    
    if (!res.ok) {
        throw new Error('Error al crear el producto');
    }

    const result = await res.json();
    return result;

};

export const getProducts = async(category) =>{
    url = `${BASE_URL}?category=${category}`;
}

const res = await fetch(url);
if(!res.ok) {
    throw new Error ("Error al listar productos");
}

const results = await res.json();
return results;
