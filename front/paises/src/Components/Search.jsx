import React from "react";
import "./search.css";
export default function Search({ searchby }) {
  const[search,setSearch]=React.useState('');

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };
  const handleOnSubmit=(e)=>{
    e.preventDefault()
    searchby(search)
    setSearch('')
  }

  return (
    <div className="search">
      <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        className='busqueda'
        placeholder="que pais desea buscar"
        onChange={handleOnChange}
        value={search}
      />
      <button type='submit'>Enviar</button>
      </form>
    </div>
  );
}
