import {
  OrdenarActivity,
  OrdenarAZ,
  OrdenarContinente,
  OrdenarPoblacion,
  Clean,
} from "../store/actions/actions";
import { useDispatch } from "react-redux";
import "./BAR.css";
export default function Bar() {
  const dispatch = useDispatch();
  const Limch = (e) => {
    e.preventDefault();
    for (let i = 0; i < e.target.length; i++) {
      e.target[i].checked = false;
    }
  }; 
  return (
    <div className="barra">
      <form onSubmit={Limch}>
        <nav>
          <ul className="listaB">
            <li>
              Filtrar por Continente
              <ul className="listaB">
                <li>
                  <input
                    type="checkbox"
                    value="Americas"
                    onClick={(e) => {
                      if (e.target.checked)
                        dispatch(OrdenarContinente(e.target.value));
                    }}
                  />
                  <span>America</span>
                </li>
                <li>
                  <input
                    type="checkbox"
                    value="Europe"
                    onClick={(e) => {
                      if (e.target.checked)
                        dispatch(OrdenarContinente(e.target.value));
                    }}
                  />
                  <span>Europa</span>
                </li>
                <li>
                  <input
                    type="checkbox"
                    value="Asia"
                    onClick={(e) => {
                      if (e.target.checked)
                        dispatch(OrdenarContinente(e.target.value));
                    }}
                  />
                  <span> Asia</span>
                </li>
                <li>
                  <input
                    type="checkbox"
                    value="Africa"
                    onClick={(e) => {
                      if (e.target.checked)
                        dispatch(OrdenarContinente(e.target.value));
                    }}
                  />
                  <span> Africa</span>
                </li>
                <li>
                  <input
                    type="checkbox"
                    value="Oceania"
                    onClick={(e) => {
                      if (e.target.checked)
                        dispatch(OrdenarContinente(e.target.value));
                    }}
                  />
                  <span>Oceania</span>
                </li>
              </ul>
            </li>
            <li className='space'>
              <div className="wrapperE">
                <div
                  className={`coin-box__boxD boxa`}
                  onClick={() => {
                    dispatch(OrdenarActivity());
                    const box = document.querySelector(`.boxa`);
                    box && box.classList.add("coin-box--squeeze");
                    setTimeout(() => {
                      box && box.classList.remove("coin-box--squeeze");
                    }, 1300);
                  }}
                >
                  <span className="coin-box__text">Actividad Turistica</span>
                  <div>
                    <div className="coin-box__rivet"></div>
                    <div className="coin-box__rivet"></div>
                    <div className="coin-box__rivet"></div>
                    <div className="coin-box__rivet"></div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <span>Filtrar A-Z</span>
              <ul className="listaB">
                <li className='space'>
                  <div className="wrapperK">
                    <div
                      className={`coin-box__boxD asciende boxc`}
                      onClick={(e) => {
                        dispatch(OrdenarAZ(e.target.className.split(" ")[1]));
                        const box = document.querySelector(`.boxc`);
                        box && box.classList.add("coin-box--squeeze");
                        setTimeout(() => {
                          box && box.classList.remove("coin-box--squeeze");
                        }, 1300);
                      }}
                    >
                      <span className="coin-box__text">↑</span>
                      <div>
                        <div className="coin-box__rivet"></div>
                        <div className="coin-box__rivet"></div>
                        <div className="coin-box__rivet"></div>
                        <div className="coin-box__rivet"></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='space'>
                  <div className="wrapperK">
                    <div
                      className={`coin-box__boxD desciende boxd`}
                      onClick={(e) => {
                        dispatch(OrdenarAZ(e.target.className.split(" ")[1]));
                        const box = document.querySelector(`.boxd`);
                        box && box.classList.add("coin-box--squeeze");
                        setTimeout(() => {
                          box && box.classList.remove("coin-box--squeeze");
                        }, 1300);
                      }}
                    >
                      <span className="coin-box__text">↓</span>
                      <div>
                        <div className="coin-box__rivet"></div>
                        <div className="coin-box__rivet"></div>
                        <div className="coin-box__rivet"></div>
                        <div className="coin-box__rivet"></div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className='space'>
              <span>Población</span>
              <ul className="listaB">
                <li className='space'>
                  <div className="wrapperK">
                    <div
                      className={`coin-box__boxD asciende boxe`}
                      onClick={(e) => {
                        dispatch(
                          OrdenarPoblacion(e.target.className.split(" ")[1])
                        );
                        const box = document.querySelector(`.boxe`);
                        box && box.classList.add("coin-box--squeeze");
                        setTimeout(() => {
                          box && box.classList.remove("coin-box--squeeze");
                        }, 1300);
                      }}
                    >
                      <span className="coin-box__text">↑</span>
                      <div>
                        <div className="coin-box__rivet"></div>
                        <div className="coin-box__rivet"></div>
                        <div className="coin-box__rivet"></div>
                        <div className="coin-box__rivet"></div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='space'>
                  <div className="wrapperK">
                    <div
                      className={`coin-box__boxD desciende boxf`}
                      onClick={(e) => {
                        dispatch(
                          OrdenarPoblacion(e.target.className.split(" ")[1])
                        );
                        const box = document.querySelector(`.boxf`);
                        box && box.classList.add("coin-box--squeeze");
                        setTimeout(() => {
                          box && box.classList.remove("coin-box--squeeze");
                        }, 1300);
                      }}
                    >
                      <span className="coin-box__text">↓</span>
                      <div>
                        <div className="coin-box__rivet"></div>
                        <div className="coin-box__rivet"></div>
                        <div className="coin-box__rivet"></div>
                        <div className="coin-box__rivet"></div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li >
              <div className="wrapperE">
                <div
                  className={`coin-box__boxD boxb`}
                  onClick={() => {
                    dispatch(Clean());
                    const box = document.querySelector(`.boxb`);
                    box && box.classList.add("coin-box--squeeze");
                    setTimeout(() => {
                      box && box.classList.remove("coin-box--squeeze");
                    }, 1300);
                  }}
                >
                  <input type="submit" className="in" value="Clean" />
                  <div>
                    <div className="coin-box__rivet"></div>
                    <div className="coin-box__rivet"></div>
                    <div className="coin-box__rivet"></div>
                    <div className="coin-box__rivet"></div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </form>
    </div>
  );
}
