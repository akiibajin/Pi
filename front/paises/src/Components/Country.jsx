import "./Country.css";
import { Link } from "react-router-dom";
import mariow from "../images/mario tall walking.gif";
import mchiquito from '../images/mario walking.gif'
export default function Country({ char, img, name, continent,error }) {
  if(error){
    return(<div><h1 className='errorMessage'>{error}</h1><img src={mchiquito} alt='And Mario?'/></div>)
  }
  return (
    <div className="targeta">
      <div className="titulo">
        <div className="marios">
          <img src={mariow} className="mariow" alt="no se encontro a mario" />
          <span className="lifes">X5</span>
        </div>
        <div className='NameCountry'>
          <span className='NombrePais'>{name}</span>
        </div>
      </div>
      <div className="img">
        <img className="flag" src={img} alt="No se encontro Bandera del Pais" />
        {/* <img className='frontMario' src={marioF} alt='no mario'/>  */}
      </div>
      <div className="continent">
        <span>{continent}</span>
        <Link to={`/home/country/${char}`} style={{textDecoration:'none'}}>
          <div className="wrapperD">
            <div className={`coin-box__boxD`}>
              <span className="coin-box__text">Details</span>
              <div>
                <div className="coin-box__rivet"></div>
                <div className="coin-box__rivet"></div>
                <div className="coin-box__rivet"></div>
                <div className="coin-box__rivet"></div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
