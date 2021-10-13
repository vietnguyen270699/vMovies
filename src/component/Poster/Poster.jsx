import React from "react";
import "./Poster.scss";
import { useHistory } from "react-router-dom";
function Poster({ type, filmData, number, getId }) {
  filmData.splice(
    number,
    filmData.length - number
  ); /*define how many poster render*/
  let history = useHistory();
  return (
    <div className="title-list">
      <ul>
        {filmData.map((film,index) => {
          return (
            <li
              onClick={() => {
                history.push(`/${type}/${film.id}`);
                getId(film.id, type);
              }}
              className="poster-item"
              key={index}
            >
              <div className="poster-img">
                <p>
                <img
                  src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                  alt=""
                />
                </p>
              </div>
              <h3 className="poster-name">{film.title || film.name}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Poster;
