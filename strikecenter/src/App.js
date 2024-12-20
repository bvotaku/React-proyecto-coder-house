import BarraDeNavegacion from "./Navbar";
import "./style.css"
import strikeimg from "./img/StrikeCenter.png";
import CarritoImg from "./img/carrito.png";
import Bienvenida from "./ItemListContainer";


function App() {
    return (
      <div>
      <header className="App">
        <BarraDeNavegacion
          titulo="Tegnologia"
          titulo2="Electrodomesticos"
          titulo3="Video juegos"
          img={strikeimg}
          CarritoImg={CarritoImg}
        />
      </header>
    
        <main>
        <Bienvenida texto = "Los Mejores Descuentos Lo Encuentras En Strike Center"/>
        </main>
    
    </div>
    );

  };
  
  export default App;

