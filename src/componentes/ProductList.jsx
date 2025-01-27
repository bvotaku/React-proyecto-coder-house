import { useEffect, useState } from "react";
import api from "./api";
import Card from "./Card";

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await api();
                setProducts(data);
            } catch (error) {
                setError("nose puede cargar los productos");
            }
        };

        fetchData();
    }, []);

    return(
        <div>
            {error && <p>{error}</p>}
            <div className="card-container">
                {products.map((product) => (
                    <Card key={product.id} product= {product}/>
                ))}
            </div> 
        </div>
    );
};

export default ProductsList;
