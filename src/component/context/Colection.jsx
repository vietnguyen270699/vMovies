import React, { useEffect, useState } from "react";

export const ColectionContext = React.createContext();

export function ColectionProvider(props) {
    const [colections, setColection] = useState([]);

          useEffect(()=>{
            if (localStorage.getItem('colection')) {
              setColection(JSON.parse(localStorage.getItem('colection')))
            }
        }, [])

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
              localStorage.setItem('colection', JSON.stringify(newColection))
          }else{
              const newColection = [...colections];
              setColection(newColection);
          }
              
        };
      const removeColection = (event) => {
     
        // const idfilm = event.target.id
        const idfilm = Number(event.target.id)
        const newColection = [...colections];
        
        console.log(typeof idfilm)

        for (let i = 0; i < newColection.length; i++) {        
          
          if (newColection[i].id === idfilm) {
            
            newColection.splice(i, 1)
          };
        }
        setColection(newColection)
        localStorage.setItem('colection', JSON.stringify(newColection))
         
        console.log( newColection.length)
        event.stopPropagation()
            
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
