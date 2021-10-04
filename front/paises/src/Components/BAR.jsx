import { OrdenarActivity, OrdenarAZ, OrdenarContinente, OrdenarPoblacion, Clean } from "../store/actions/actions"
import { useDispatch } from "react-redux"
import './BAR.css'
export default function Bar(){
    const dispatch=useDispatch()
    return(
        <div className='barra'>
            <button>Abrir/Cerrar</button>
            <ul>
                <li>
                    Filtrar por Continente
                    <ul>
                        <li >
                            <button value='Americas'  onClick={(e)=>dispatch(OrdenarContinente(e.target.value))}>America</button> 
                        </li>
                        <li>
                            <button value='Europe'  onClick={(e)=>dispatch(OrdenarContinente(e.target.value))}>Europa</button>
                        </li>
                        <li>
                            <button value='Asia'  onClick={(e)=>dispatch(OrdenarContinente(e.target.value))}>Asia</button>
                        </li>
                        <li>
                            <button value='Africa'  onClick={(e)=>dispatch(OrdenarContinente(e.target.value))}>Africa</button>
                        </li>
                        <li>
                            <button value='Oceania'  onClick={(e)=>dispatch(OrdenarContinente(e.target.value))}>Oceania</button>
                        </li>
                    </ul>
                </li>
                <li>
                    <button onClick={()=>dispatch(OrdenarActivity())}>Filtrar por Tipo de Actividad Turistica</button> 
                </li>
                <li>
                    <button onClick={()=>dispatch(OrdenarAZ())}> Filtrar A-Z</button>
                </li>
                <li>
                    <button onClick={()=>dispatch(OrdenarPoblacion())}>Filtrar por Poblacion</button>  
                </li>
                <li>
                    <button onClick={()=>dispatch(Clean())}> Limpiar Filtros </button>
                </li>
            </ul>
        </div>
    )
}