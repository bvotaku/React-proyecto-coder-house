
function CarritoDeCompras({CarritoImg}) {
    const numeroDeArticulos = 3;  
    return (
      <div className="carrito-container" >
        <img className="carrito-icon"
          src={CarritoImg} alt="Carrito de compras"
        />
          <span className="numero-articulos">{numeroDeArticulos}</span>
      </div>
    );
  };

  export default CarritoDeCompras;