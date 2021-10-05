import React from "react"
import { useDispatch,useSelector } from "react-redux"
import { funcPost } from "../store/actions/actions"
import './Create.css'
import validate from "./validar"
export default function Create({prop,boo,Render}){
    const countries=useSelector(state=>state.countries)
    const dispatch=useDispatch()
    const [errors,setErrors]=React.useState({flag:true})
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
        setErrors(
            validate({
                ...inputs,
                [e.target.name]:e.target.name
            })
        )
    }
    const selectChange=(e)=>{
        setInput({
            ...inputs,
            pais:inputs.pais.concat(e.target.value)
        })
        setErrors(
            validate({
                ...inputs,
                [e.target.name]:e.target.name
            })
        )
    }
    const Enviar=(e)=>{
        e.preventDefault()
        dispatch(funcPost(inputs))
        setInput({name:'',duracion:'',dificultad:'',temporada:'',pais:prop?[prop]:[]})
        setErrors({flag:true})
        Render&&Render()
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
                <input className={errors.name&& 'colocarNombre'} name='name' value={inputs.name} placeholder='nombre de la actividad' onChange={handleOnChange} type="text" />
                {errors.name&&<span className='danger'>{errors.name}</span>}
                <select className={errors.dificultad&&'selecDifi'} name="dificultad" value={inputs.dificultad} onChange={handleOnChange}>
                    <option value=''>Selecciona la dificultad</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                {errors.dificultad&&<span className='danger'>{errors.dificultad}</span>}
                <input className={errors.duracion&&'colocarDuracion'} name='duracion' type="text" placeholder='duración' value={inputs.duracion} onChange={handleOnChange}/>
                {errors.duracion&&<span className='danger'>{errors.duracion}</span>}
                <select className={errors.temporada&&'selecTemporada'} name="temporada" value={inputs.temporada} onChange={handleOnChange}>
                    <option value=''>Selecciona la Temporada</option>
                    <option value="Verano">Verano</option>
                    <option value="Otoño">Otoño</option>
                    <option value="Invierno">Invierno</option>
                    <option value="Primavera">Primavera</option>
                </select>
                {errors.temporada&&<span className='danger'>{errors.temporada}</span>}
                <select className='selecPais' name='pais' onChange={selectChange} disabled={boo}>
                    {countries.map(e=>
                        <option key={e.ID} value={e.ID}>{e.flag} {e.ID}</option>
                    )}
                 </select>
                 <button className='botonSub' type="submit" disabled={errors.flag}>Crear </button>
                 <div className='paisesAgregados'>
            {inputs.pais&&inputs.pais.map(e=>{return(<div key={e} className='agr'><span>{e}</span><button value={e} disabled={boo} onClick={QuitarL}>X</button></div>)})}
            </div>
            </form>
        </div>
    )
}
