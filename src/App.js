import "./style.css";
import ProductsList from "./componentes/ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetalleProducto from "./pages/DetalleProducto";
import Tecnologia from "./pages/Tegnologia";
import Joyas from "./pages/Joyas";
import Ropa from "./pages/Ropa";
import Bienvenida from "./componentes/ItemListContainer";
import Principal from "./pages/Principal";
import BarraDeNavegacion from "./componentes/Navbar";

function App() {
  return (
    <div>
        <BrowserRouter>
        <header className="App">
          <BarraDeNavegacion />
          <Routes>
            <Route path="/" element={<Principal />} />
            <Route index  />
            <Route path="tecnologia" element={<Tecnologia />} />
            <Route path="ropa" element={<Ropa />} />
            <Route path="joyas" element={<Joyas />} />
            <Route path="detalleproducto/:id" element={<DetalleProducto />} />
          </Routes>
          </header>
        </BrowserRouter>

      <main>
        <Bienvenida />
        <ProductsList />
      </main>
    </div>
  );
}

export default App;
