import { Link } from "react-router-dom";
import "./navBar.css";
export default function NavBar() {
  return (
    <div className="navegacion">
      <div className="lista">
        <Link to="/" style={{textDecoration:'none'}}>
          <li className="hijo1">
            <div className="wrapperE">
              <div
                className={`coin-box__boxD`} >
                <span className="coin-box__text">
                  Index
                </span>
                <div>
                  <div className="coin-box__rivet"></div>
                  <div className="coin-box__rivet"></div>
                  <div className="coin-box__rivet"></div>
                  <div className="coin-box__rivet"></div>
                </div>
              </div>
            </div>
          </li>
        </Link>
        <Link to="/home/create" style={{textDecoration:'none'}}>
          <li className="hijo1">
          <div className="wrapperE">
              <div
                className={`coin-box__boxD boxj`}  onClick={()=>{
                  const box = document.querySelector(`.boxj`);
                  box && box.classList.add("coin-box--squeeze");
                  setTimeout(() => {
                    box && box.classList.remove("coin-box--squeeze");
                  }, 1300);
                }
              }
              >
                <span className="coin-box__text">
                  Create Activity
                </span>
                <div>
                  <div className="coin-box__rivet"></div>
                  <div className="coin-box__rivet"></div>
                  <div className="coin-box__rivet"></div>
                  <div className="coin-box__rivet"></div>
                </div>
              </div>
            </div>
          </li>
        </Link>
      </div>
    </div>
  );
}
