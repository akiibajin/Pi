import './Country.css'
import {Link} from 'react-router-dom'
export default function Country({char,img,name,capital,continent}){
    return(
        <div className='targeta'>
            <div className='titulo'>
            <span>{name}</span> 
            </div>
            <div className='img'>
            <img className='flag' src={img} alt="No se encontro Bandera del Pais" />   
            </div>
            <div className='continent'>
            <span>{continent}</span>
            <Link to={`/home/country/${char}`}>
                <button className='enlace'>Detalles</button>
            </Link>
            </div>
        </div>
    )
}