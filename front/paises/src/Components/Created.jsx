import Create from "./create"
import './Created.css'
export default function Created(){
    return(
        <div className='cont'>
        <div className='crear'>
            <span>Registra la Actividad de Varios Paises</span>
        </div>
        <Create boo={false}/>
        </div>
    )
}