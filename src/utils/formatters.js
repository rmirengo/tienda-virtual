// src/utils/formatters.js (REEMPLAZAR)

export const formatCurrency = (amount, currency = 'USD', locale = 'es-AR') => {
    
    // 1. Convertir a número. Si amount es un string, esto lo convierte.
    const numberAmount = Number(amount);
    
    // 2. Validación CRÍTICA: Si no es un número válido o es nulo/cero, retorna vacío.
    // Esta es la parte que probablemente estaba fallando.
    if (isNaN(numberAmount) || numberAmount === 0 || amount === null || amount === undefined) {
        return '';
    }
    
    // 3. Formateo y Manejo de Errores (para el caso improbable de un fallo de Intl)
    try {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: 'ARS',
            // Agregamos esto para asegurar los dos decimales:
            minimumFractionDigits: 2, 
        }).format(numberAmount);
    } catch (e) {
        // En caso de que falle el formateo, al menos muestra el número original.
        console.error("Error al formatear moneda:", e);
        return String(amount);
    }
};