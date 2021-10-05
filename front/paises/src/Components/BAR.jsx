import { OrdenarActivity, OrdenarAZ, OrdenarContinente, OrdenarPoblacion, Clean } from "../store/actions/actions"
import { useDispatch } from "react-redux"
import './BAR.css'
export default function Bar(){
    const dispatch=useDispatch()
    const Limch=(e)=>{
        e.preventDefault()
        for(let i=0;i<e.target.length;i++){
            e.target[i].checked=false
        }
    }
    return(
        <div className='barra'>
            <form onSubmit={Limch}>
            <ul className='listaB'>
                <li>
                    Filtrar por Continente
                    <ul className='listaB'>
                        <li>
                        <input type='checkbox' value='Americas' onClick={(e)=>{if(e.target.checked) dispatch(OrdenarContinente(e.target.value))}}/><span>America</span> 
                        </li>
                        <li>
                        <input type='checkbox'  value='Europe' onClick={(e)=>{if(e.target.checked) dispatch(OrdenarContinente(e.target.value))}}/><span>Europa</span>
                        </li>
                        <li>
                        <input type='checkbox' value='Asia' onClick={(e)=>{if(e.target.checked) dispatch(OrdenarContinente(e.target.value))}}/><span> Asia</span>
                        </li>
                        <li>
                        <input type='checkbox' value='Africa' onClick={(e)=>{if(e.target.checked) dispatch(OrdenarContinente(e.target.value))}}/> <span> Africa</span>
                        </li>
                        <li>    
                        <input type='checkbox' value='Oceania' onClick={(e)=>{if(e.target.checked) dispatch(OrdenarContinente(e.target.value))}} />   <span>Oceania</span>
                        </li>
                    </ul>
                </li>
                <li>
                    <button className='botonf' onClick={()=>dispatch(OrdenarActivity())}>Actividad Turistica</button> 
                </li>
                <li>
                    <span>Filtrar A-Z</span><ul><li><button className='botonfi' value='asciende' onClick={(e)=>dispatch(OrdenarAZ(e.target.value))}>↑</button></li><button className='botonfi' value='desciende' onClick={(e)=>dispatch(OrdenarAZ(e.target.value))}>↓</button><li></li></ul>
                </li>
                <li>
                   <span>Población</span><ul><li><button className='botonfi' value='asciende' onClick={(e)=>dispatch(OrdenarPoblacion(e.target.value))}>↑</button></li><li><button className='botonfi' value='desciende' onClick={(e)=>dispatch(OrdenarPoblacion(e.target.value))}>↓</button></li></ul>  
                </li>
                <li>
                    <button className='botonf' type='submit' onClick={()=>dispatch(Clean())}> Limpiar Filtros </button>
                </li>
            </ul>
            </form>
        </div>
    )
}