import {Create} from "./create";
import "./Created.css";
import Yoshi from '../images/mario and yoshi.gif'
export default function Created() {
  return (
    <div className="contenerPlantilla">
      <div className="creare">
        <span>Registra la Actividad de Varios Paises</span>
      </div>
      <div className='crear'>
      <Create boo={false} />
      </div>
      <div className='marioY'>
        <img className='yoshiM' src={Yoshi} alt="No hay Yoshi" />
      </div>
    </div>
  );
}
 