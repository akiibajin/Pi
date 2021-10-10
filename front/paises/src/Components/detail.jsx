import React from "react";
import { funcDetail } from "../store/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import {Create} from "./create";
import { Link } from "react-router-dom";
import "./detail.css";
import MarioF from '../images/mario de frente.png'
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
      <div className="regresar">
        <Link to="/home">
          <button>REGRESAR</button>
        </Link>
      </div>
      <span className="titulo-char">{detail.ID}</span>
      <img src={MarioF} className='marioV' alt='no Mario'/>
      <img
        className="bandera"
        src={detail.flags}
        alt="No se encontro bandera"
      />
      <span className="nombre">{detail.name}</span>
      <span className="continente">{detail.continent}</span>
      <div className="content">
        <span className="capital">Capital: {detail.capital}</span>
        <span className="subregion">Subregion: {detail.subregion}</span>
        <p className="area">
          Área: {`${new Intl.NumberFormat().format(detail.area)} 'Km2'`}
        </p>
        <p className="poblacion">
          Poblacion: {new Intl.NumberFormat().format(detail.population)}
        </p>
      </div>
      <div className="actividades">
        {detail.Actividades &&
          detail.Actividades.map((e, i) => {
            return (
              <div key={i} className="actividad">
                <p key={e.name}>actividad: {e.name}</p>
                <p key={e.duracion}>duracion: {e.duracion}</p>
                <p key={e.dificultad}>dificultad: {e.dificultad}</p>
                <p key={e.temporada}>temporada: {e.temporada}</p>
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
