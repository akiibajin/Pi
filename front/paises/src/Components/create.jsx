import React from "react"
import { useDispatch,useSelector } from "react-redux"
import { funcPost } from "../store/actions/actions"
import './Create.css'
export default function Create({prop,boo}){
    let bool=false
    const countries=useSelector(state=>state.countries)
    const dispatch=useDispatch()
    const [inputs,setInput]=React.useState({
        name:'',
        duracion:'',
        dificultad:'',
        temporada:'',
        pais:prop?[prop]:[]
    })
    const handleOnChange=(e)=>{
        setInput({
            ...inputs,
            [e.target.name]:e.target.value
        })
    }
    const selectChange=(e)=>{
        setInput({
            ...inputs,
            pais:inputs.pais.concat(e.target.value)
        })
    }
    const Enviar=(e)=>{
        e.preventDefault()
        dispatch(funcPost(inputs))
        setInput({name:'',duracion:'',dificultad:'',temporada:'',pais:prop?[prop]:[]})
        bool=true
        alert('Actividades creadas!!')
    } 
    const QuitarL=(e)=>{
        setInput({
            ...inputs,
            pais:inputs.pais.filter(p=>p!==e.target.value)
        })
    }
    return (
        <div className='formulario'>
            <form onSubmit={Enviar} className='submit'>
                    <span className='crearactividad'>Crear Actividad</span>
                <input className='colocarNombre' name='name' value={inputs.name} placeholder='nombre de la actividad' onChange={handleOnChange} type="text" />
                <select className='selecDifi' name="dificultad" value={inputs.dificultad} onChange={handleOnChange}>
                    <option value=''>-- --</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input className='colocarDuracion' name='duracion' type="text" placeholder='duracion' value={inputs.duracion} onChange={handleOnChange}/>
                <select className='selecTemporada' name="temporada" value={inputs.temporada} onChange={handleOnChange}>
                    <option value=''>-- --</option>
                    <option value="Verano">Verano</option>
                    <option value="Otoño">Otoño</option>
                    <option value="Invierno">Invierno</option>
                    <option value="Primavera">Primavera</option>
                </select>
                <select className='selecPais' name='pais' onChange={selectChange} disabled={boo}>
                    {countries.map(e=>
                        <option key={e.ID} value={e.ID}>{e.flag} {e.ID}</option>
                    )}
                 </select>
                 <button className='botonSub' type="submit" >Crear </button>
                 <div className='paisesAgregados'>
            {inputs.pais&&inputs.pais.map(e=>{return(<div key={e} className='agr'><span>{e}</span><button value={e} disabled={boo} onClick={QuitarL}>X</button></div>)})}
            </div>
            </form>

        </div>
    )
}
