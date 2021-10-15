import React, { useContext } from "react";
import "./Poster.scss";
import { useHistory } from "react-router-dom";
import ClearIcon from '@material-ui/icons/Clear';
import { ColectionContext } from "../context/Colection"


function Poster({ type='', filmData, number, getId , colected=false}) {

  filmData.splice(
    number,
    filmData.length - number
  ); /*define how many poster render*/
  let history = useHistory();

  const { removeColection} = useContext(ColectionContext);


 
  return (
    <div className="title-list">
      <ul>
        {filmData.map((film,index) => {
           let checktype = type || film.type
          return (
            <li
              onClick={() => {
                history.push(`/${checktype}/${film.id}`);
                getId(film.id, checktype);
              }}
              className="poster-item"
              key={index}
            > 
               {colected? <ClearIcon  onClick={removeColection} id={film.id} className='btn-delete'/>: ''}
              
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
