import {Create} from "./create";
import "./Created.css";
import Yoshi from '../images/mario and yoshi.gif'
import yoshi from "../music/yoshi.mp3"
import { Link } from "react-router-dom";
export default function Created() {
  return (
    <div className="contenerPlantilla">
      <audio src={yoshi} loop autoPlay></audio>
      <div className="creare">
        <span>Registra la Actividad de Varios Paises</span>
      </div>
      <div className='crear'>
      <Create boo={false} />
      </div>
      <div className='marioY'>
        <img className='yoshiM' src={Yoshi} alt="No hay Yoshi" />
      </div>
      <div className='ButtonHome'>
      <Link to="/home">
          <button>Back to home</button>
        </Link>
      </div>
    </div>
  );
}
 