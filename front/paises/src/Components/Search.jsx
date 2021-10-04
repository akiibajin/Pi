import React from "react"
import './search.css'
export default function Search({searchby}){
    const [country,setCountry]=React.useState('')
    React.useEffect(()=>{
        console.log(country)
        searchby(country)
    },[country])
    const handleOnChange=(e)=>{
         setCountry(e.target.value)
    }
    return(
        <div className='search'>
            <input type="text" placeholder='que pais desea buscar' onChange={handleOnChange} value={country}/>
        </div>
    )
}