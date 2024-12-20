import CarritoDeCompras from "./CartWidget";


function BarraDeNavegacion ({titulo,titulo2,titulo3,CarritoImg,img}){
    return(
            <nav className="navbar">
                
                <div className="navbar-logo" >
                    <img src= {img} alt="" />
                </div>
                
                <ul className="navbar-links">
                    <li>
                        <a href="">{titulo}</a>
                    </li>
                    <li>
                        <a href="">{titulo2}</a>
                    </li>
                    <li>
                        <a href="">{titulo3}</a>
                    </li>
                </ul>

                <CarritoDeCompras CarritoImg={CarritoImg} />

            </nav>
    )
};

export default BarraDeNavegacion;
