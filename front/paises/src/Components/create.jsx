import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { funcPost } from "../store/actions/actions";
import "./Create.css";
import validate from "./validar";
export  function Create({ prop, boo, Render/*,funcPost,countries*/ }) {
 const countries = useSelector((state) => state.countries);
 const dispatch = useDispatch();
  const [errors, setErrors] = React.useState({ flag: true });
  const [inputs, setInput] = React.useState({
    name: "", 
    duracion: "",
    dificultad: "",
    temporada: "",
    pais: prop ? [prop] : [],
  });
  const handleOnChange = (e) => {
    setInput({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...inputs,
        [e.target.name]: e.target.name,
      })
    );
  };
  const selectChange = (e) => {
    setInput({
      ...inputs,
      pais: inputs.pais.concat(e.target.value),
    });
    setErrors(
      validate({
        ...inputs,
        [e.target.name]: e.target.name,
      })
    );
  };
  const Enviar = (e) => {
    e.preventDefault();
    console.log(inputs)
   dispatch(funcPost(inputs));
   //funcPost(inputs);
    setInput({
      name: "",
      duracion: "",
      dificultad: "",
      temporada: "",
      pais: prop ? [prop] : [],
    });
    setErrors({ flag: true });
    Render && Render();
    alert("Actividades creadas!!");
  };
  const QuitarL = (e) => {
    setInput({
      ...inputs,
      pais: inputs.pais.filter((p) => p !== e.target.value),
    });
  };
  console.log('Paises',countries)
  return (
    <div className="formulario">
      <form onSubmit={Enviar} className="submit">
        <span name='crearActividad' className="crearactividad">Create Activity</span>
        <input
          className={errors.name || "colocarNombre"}
          name="name"
          value={inputs.name}
          placeholder="Activity's Name"
          onChange={handleOnChange}
          type="text"
        />
        {errors.name && <span className="danger">{errors.name}</span>}
        <select
          className={errors.dificultad || "selecDifi"}
          name="dificultad"
          value={inputs.dificultad}
          onChange={handleOnChange}
        >
          <option value="">Select Difficulty</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        {errors.dificultad && (
          <span className="danger">{errors.dificultad}</span>
        )}
        <input
          className={errors.duracion || "colocarDuracion"}
          name="duracion"
          type="text"
          placeholder="Duration"
          value={inputs.duracion}
          onChange={handleOnChange}
        />
        {errors.duracion && <span className="danger">{errors.duracion}</span>}
        <select
          className={errors.temporada || "selecTemporada"}
          name="temporada"
          value={inputs.temporada}
          onChange={handleOnChange}
        >
          <option value="">Select Season</option>
          <option value="Verano">Summer</option>
          <option value="Otoño">Autumn</option>
          <option value="Invierno">Winter</option>
          <option value="Primavera">Spring</option>
        </select>
        {errors.temporada && <span className="danger">{errors.temporada}</span>}
        <select
          className="selecPais"
          name="pais"
          onChange={selectChange}
          disabled={boo}
        >
          {countries&&countries.map((e) => (
            <option key={e.ID} value={e.ID}>
              {e.flag} {e.ID}
            </option>
          ))}
        </select>
        <button className="botonSub" type="submit" disabled={errors.flag}>
          Create{" "}
        </button>
        <div className="paisesAgregados">
          {inputs.pais &&
            inputs.pais.map((e) => {
              return (
                <div key={e} className="agr">
                  <span className='SpanPaises'>{e}</span>
                  <button value={e} disabled={boo} className='botonQuite' onClick={QuitarL}>
                    X
                  </button>
                </div>
              );
            })}
        </div>
      </form>
    </div>
  );
}
// const mapDispatchToProps=(dispatch)=>{
//   return{
//     funcPost:(arg)=>dispatch(funcPost(arg))
//   }
// }
// const mapStateToProps=(state)=>({countries:state.countries})

// export default connect(mapStateToProps,mapDispatchToProps)(Create)