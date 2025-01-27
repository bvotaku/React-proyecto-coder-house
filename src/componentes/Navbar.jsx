import { Link } from "react-router-dom";
import CarritoDeCompras from "./CartWidget";
import Logo from "../img/StrikeCenter.png";

function BarraDeNavegacion() {
  return (
    <nav className="navbar">
  <Link className="navbar-logo" to="/">
    <img src={Logo} alt="Logo" />
  </Link>
  <div className="navbar-links">
    <Link to="/joyas">Joyas</Link>
    <Link to="/tecnologia">Tecnología</Link>
    <Link to="/ropa">Ropa</Link>
    <Link to="/detalleproducto">Detalle del Producto</Link>
  </div>
  <Link className="navbar-carrito" to="/cart">
    <CarritoDeCompras />
  </Link>
</nav>

  );
}

export default BarraDeNavegacion;
