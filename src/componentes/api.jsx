import axios from "axios";

const api = async () => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        return response.data;
    } catch (error) {
        console.error("Error al cargar los datos", error);
        throw error;  
    }
};

export default api;
