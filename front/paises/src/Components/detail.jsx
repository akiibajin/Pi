import React from "react";
import { funcDetail } from "../store/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import {Create} from "./create";
import { Link } from "react-router-dom";
import "./detail.css";
import MarioF from '../images/mario de frente.png'
import castillo from "../music/Castillo.mp3"
import marioCap from "../images/mario-cap-walking.gif"
export default function Detail({ props }) {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);
  const actividades=useSelector((state)=>state.activitys)
  React.useEffect(() => {
    dispatch(funcDetail(props));
  },[actividades,dispatch,props]);


  const Render = () => dispatch(funcDetail(props));
  return (
    <div className="todo-el-detalle">
      <audio src={castillo} loop autoPlay></audio>
      <div className="regresar">
        <Link to="/home">
          <button>Back to home</button>
        </Link>
      </div>
      <span className="titulo-char">{detail.ID}</span>
      <img src={MarioF} className='marioV' alt='No Mario'/>
      <img src={marioCap} className='mariocapa' alt="no MarioCapa" />
      <img
        className="bandera"
        src={detail.flags}
        alt="Didn't Found a Flag"
      />
      <span className="nombre">{detail.name}</span>
      <span className="continente">{detail.continent}</span>
      <div className="content">
        <span className="capital">Capital: {detail.capital}</span>
        <span className="subregion">Subregion: {detail.subregion}</span>
        <p className="area">
          Area: {`${new Intl.NumberFormat().format(detail.area)} Km2`}
        </p>
        <p className="poblacion">
          Population: {new Intl.NumberFormat().format(detail.population)}
        </p>
      </div>
      <div className="actividades">
        {detail.Actividades &&
          detail.Actividades.map((e, i) => {
            return (
              <div key={i} className="actividad">
                <p key={e.name}>Activity: {e.name}</p>
                <p key={e.duracion}>Length: {e.duracion}</p>
                <p key={e.dificultad}>Difficulty: {e.dificultad}</p>
                <p key={e.temporada}>Season: {e.temporada}</p>
              </div>
            );
          })}
      </div>
      <div className="crear">
        <Create prop={props} boo={true} Render={Render} />
      </div>
    </div>
  );
}
