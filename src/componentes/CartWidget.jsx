import carritoImg from "../img/carrito.png"; 


function CarritoDeCompras() {
  const numeroDeArticulos = 3;
  return (
    <div>
      <img src={carritoImg} alt="Carrito de compras" />
      <span className="numero-articulos">{numeroDeArticulos}</span>
    </div>
  );
}

export default CarritoDeCompras;
