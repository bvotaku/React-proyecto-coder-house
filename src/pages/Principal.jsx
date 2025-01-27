import BarraDeNavegacion from "../componentes/Navbar"; 
import { Outlet } from "react-router-dom";

function Principal() {
  return (
    <div>
      <BarraDeNavegacion />
      <Outlet /> 
    </div>
  );
}

export default Principal;
