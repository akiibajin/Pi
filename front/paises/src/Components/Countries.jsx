import Country from "./Country.jsx"
import './Countries.css'
export default function Countries({countries}){  
    return(
        <div className='tarjetas'>
            {Array.isArray(countries)?countries.map(e=>
            <Country key={e.ID} char={e.ID}  img={e.flags} name={e.name} continent={e.continent}/>
        ):<h1>No se encontro el pais</h1>
    }
        </div>
    )
}