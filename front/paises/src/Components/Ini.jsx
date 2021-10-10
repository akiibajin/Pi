import { Link } from "react-router-dom";
import bloque from "../images/bloque.ico";
import "./ini.css";
export default function Ini() {
  return (
    <div className="boton">
      <Link to="/home">
        <img src={bloque} className="int" alt="No se encontro la imagen" />
      </Link>
    </div>
  );
}
