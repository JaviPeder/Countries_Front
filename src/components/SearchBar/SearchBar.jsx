import React, { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./searchbar.module.css";
import { getCountries, getByName } from "../../actions";

export default function SearchBar({setPage}) {

  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const resetHandler = () => {
    dispatch(getCountries());
  };

  // console.log(input)
  const handlerSubmit = (e) => {
    e.preventDefault();
    if(!input) alert ('Por favor ingrese un país')
    setPage(1)
    dispatch(getByName(input));
    setInput('');
  };

// refrescar la pagina

  return (
    <div className={s.container}>
    
        <button className={s.btnreset} onClick={() => resetHandler()}>
          Reset
        </button>
        {/* formulario para buscar por nombre */}
        <form className={s.form} onSubmit={(e) => {
                handlerSubmit(e)
    }}
    >
     <input
        className={s.input}
        type="text"
        placeholder="Search country by name"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <input className={s.btn} type="submit" value= 'Search' />
      
    </form> 
    </div>
  );
};

