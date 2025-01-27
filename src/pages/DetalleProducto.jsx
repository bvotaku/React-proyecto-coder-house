
function DetalleProducto (product){
    const {image, title, price, description} = product;
    
    return(
        
            <div className="card">
            <img  className="card-img" src={image} alt={title}/>
            <h3 className="card--title">{title}</h3>
            <p className="card-price">${price}</p>
            <p>{description}</p>
            <button className="card-button">Agregar al carrito</button>
            </div>
        
    );
};

export default DetalleProducto;