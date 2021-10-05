import React     from "react"
import { funcDetail } from "../store/actions/actions"
import { useDispatch,useSelector } from "react-redux"
import Create from "./create"
import { Link } from "react-router-dom"
import './detail.css'

export default function Detail({props}){
    const dispatch=useDispatch()
    const detail=useSelector(state=>state.detail)
    React.useEffect(()=>{
        dispatch(funcDetail(props))
    },[])
    const Render=()=>dispatch(funcDetail(props))
    return(
        <div className='todo-el-detalle'>
            <div className='regresar'   >
            <Link to='/home'>
                <button>REGRESAR</button>
            </Link>
            </div>
            <h1 className='titulo-char'>
                {detail.ID}
            </h1>
                <img className='bandera' src={detail.flags} alt="No se encontro bandera"/>
            <h2 className='nombre'>
                {detail.name}
            </h2>
            <h2 className='continente'>
                {detail.continent}
            </h2>
            <div className='content'>
            <h3 className='capital'>
               Capital: {detail.capital}
            </h3>
            <h2 className='subregion'>
               Subregion: {detail.subregion}
            </h2>
            <p className='area'>
               Área: {`${new Intl.NumberFormat().format(detail.area)} 'Km2'`} 
            </p>
            <p className='poblacion'>
               Poblacion: {new Intl.NumberFormat().format(detail.population)}
            </p>
            </div>
            <div className='actividades'>
            {detail.Actividades&&detail.Actividades.map((e,i)=>{
                return (
                <div key={i} className='actividad'>
                    <p key={e.name}>actividad: {e.name}</p>
                    <p key={e.dificultad}>dificultad: {e.dificultad}</p>
                    <p key={e.temporada}>temporada: {e.temporada}</p>
                </div>
                )
            }
            )}
            </div>
            <div className='crear'>
            <Create prop={props} boo={true} Render={Render}/>
            </div>

        </div>
    )
}