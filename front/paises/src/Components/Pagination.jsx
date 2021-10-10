import React from "react";
import { useDispatch } from "react-redux";
import { Current } from "../store/actions/actions";
import "./Pagination.css";
export default function Pagination({ contenedor }) {
  const dispatch = useDispatch();
  const [postsPerPage] = React.useState(9);
  const [current, setCurrent] = React.useState(1);
  const indexOfLastPost = current * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = contenedor.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumbers = [];
  React.useEffect(() => {
    dispatch(Current(currentPosts, current));
  }, [contenedor, current]);
  for (let i = 1; i <= Math.ceil(contenedor.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const activateCoinBox = (e) => {
    setCurrent(e.target.id);
    const box = document.querySelector(`.box${e.target.id}`);
    box && box.classList.add("coin-box--squeeze");
    setTimeout(() => {
      box && box.classList.remove("coin-box--squeeze");
    }, 1300);
  };

  return (
    <div className="numpag">
      <ul className="lists">
        {pageNumbers.map((e, i) => (
          <li key={e} className="botonn">
            <div className="wrapper">
              <div
                id={i + 1}
                onClick={(e) => activateCoinBox(e)}
                className={`coin-box__box box${i + 1}`}
              >
                <span id={i + 1} className="coin-box__text">
                  {e}
                </span>
                <div>
                  <div id={i + 1} className="coin-box__rivet"></div>
                  <div id={i + 1} className="coin-box__rivet"></div>
                  <div id={i + 1} className="coin-box__rivet"></div>
                  <div id={i + 1} className="coin-box__rivet"></div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
