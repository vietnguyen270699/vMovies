import React, { useState } from "react";

export const ColectionContext = React.createContext();

export function ColectionProvider(props) {
    const [colections, setColection] = useState([]);

    const isExists = (colections = [], item = {}) => {
        for (let colection of colections) {
            if (colection.id === item?.id) {        
                return colections;
            }
        }
        return false;
    }

    const addColection = (colectionFilm) => {
        if(!isExists(colections,colectionFilm))
        {
            const newColection = [...colections];
            newColection.push(colectionFilm);
            setColection(newColection);
        }else{
            const newColection = [...colections];
            setColection(newColection);
        }
            
      };
      const removeColection = (id) => {
        const ids = id;
    
        const virtualCart = [...colections];
        for (let i = 0; i < virtualCart.length; i++) {
          if (virtualCart[i].id === ids) {
           
            virtualCart.splice(i, 1);
          }
        }
            setColection(virtualCart)
            
      };
  return (
    <ColectionContext.Provider
      value={{
        colections: colections,
        addColection: addColection,
        removeColection:removeColection
      }}
    >
     {props.children}
    </ColectionContext.Provider>
  );
}
