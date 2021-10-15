import React, { useContext } from "react";
import Poster from "../Poster/Poster";
import "./Colection.scss";
import { ColectionContext } from "../context/Colection"
function Colection({  getId }) {
  
  const { colections} = useContext(ColectionContext);
  return (
    <section className="colection-section">
      <div className="container">
        <h1>Bộ sưu tập phim của bạn</h1>
        <h2>Các phim bạn muốn xem:</h2>
            <div>
                <Poster
               
                  filmData={colections}
                  number={colections.length}
                  getId={getId}
                  colected={true}
                />
              
            </div>
      </div>
    </section>
  );
}

export default Colection;
