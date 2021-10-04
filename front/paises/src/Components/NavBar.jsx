import { Link } from "react-router-dom"
import './navBar.css'
export default function NavBar(){
    return(
        <div className='navegacion'>
            <ul className='lista'>
                <Link to='/'>
                    <li className='hijo1'><button className='parrafo'>Inicio</button></li>
                </Link>
                <Link to='/home/create'>
                    <li className='hijo1'><button className='parrafo'>Crear Actividad</button></li>
                </Link>
            </ul>
        </div>
    )
}