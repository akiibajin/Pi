import Country from "./Country.jsx";
import "./Countries.css";
import mchiquito from '../images/mario walking.gif'
export default function Countries({ countries }) {
  return (
    <div>
      <ul className="tarjetas">
        {Array.isArray(countries) ? (
          countries.map((e) => {
            return (
              <li key={e.ID}>
                <Country
                  char={e.ID}
                  img={e.flags}
                  name={e.name}
                  continent={e.continent}
                  error={e.error}
                />
              </li>
            );
          })
        ) : (
          <div>
          <h1>No se encontro el Pais</h1>
          <img src={mchiquito} alt='y mario?'/>
          </div>
        )}
      </ul>
    </div>
  );
}
