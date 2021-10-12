import { Link } from "react-router-dom";
import bloque from "../images/bloque.ico";
import "./ini.css";
import audioIntro from '../music/InicioMario.mp3'
export default function Ini() {
  return (
    <div className="boton">
      <audio src={audioIntro}loop autoPlay></audio>
      <Link to="/home">
        <img src={bloque} className="int" alt="No se encontro la imagen" />
      </Link>
    </div>
  );
}
