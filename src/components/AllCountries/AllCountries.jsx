import React, { useState } from "react";
import Country from "../Country/Country.jsx";
import { useSelector } from "react-redux";
import s from "./allcountries.module.css"
import Paginado from '../Paginado/Paginado.jsx'
import img from '../../img/error.png'
// import imgloading from '../../img/loading2.png'
import imgloading2 from '../../img/loading3.gif'
import Nav from "../Nav/Nav.jsx";

export default function AllCountries() {

  const countries = useSelector((state) => state.countries);
  const [currentPage, setCurrentPage] = useState(1);
  //  eslint-disable-next-line
  const [countriesPerPage, setcountriesPerPage] = useState(9);

  //0      9
  //9 ---- 18
  const lastPosition = currentPage * countriesPerPage;
  const firstPosition = lastPosition - countriesPerPage;
  // sin modif      lo que debo lograr
  // 0-9
  // 9-18           9-19             pag1
  // 18-27          19-29            pag2
  // 27-36          29-39            pag3
  // debo conseguir que la primera pagina tenga  9 paises y el resto 10
  //last p = 18
  

  const paginado = (page) => {
      setCurrentPage(page);
  }
// console.log(currentPage)
//    console.log(countries.length)
  if (firstPosition > 1) {
    var currentCountries = countries.slice(firstPosition + currentPage - 2, lastPosition + currentPage - 1)
  } else {
    currentCountries = countries.slice(firstPosition, lastPosition)
  }
  //para lograr el paginado con flechas debo saber cuantas paginas se estan renderizando- maxPag
  let maxPag = Math.ceil(((countries.length - countriesPerPage) / (countriesPerPage + 1)) + 1)
  // console.log(currentPage)

  function nextPage() {
    if (currentPage === maxPag) {
      setCurrentPage(currentPage)
    } else {
      setCurrentPage(currentPage + 1)
    }
  }
  function prevPage() {
    if (currentPage === 1) {
      setCurrentPage(currentPage)
    } else {
      setCurrentPage(currentPage - 1)
    }
  }
  function firstPage() {
    setCurrentPage(1)
  }
  function lastPage() {
    setCurrentPage(maxPag)
  }

  // console.log(typeof countries.length)
  return (
    <div>
       <Nav setPage={setCurrentPage}/>
      <Paginado
        page={currentPage}
        countriesPerPage={countriesPerPage}
        countries={countries}
        paginado={paginado} />
      <div>
        <div className={s.nextprev}>
          <button disabled={currentPage === 1? true: false} className={s.btn} onClick={() => firstPage()}>{'<<'}</button>
          <button  className={s.btn} onClick={() => prevPage()}>prev</button>

          <button className={s.btn} onClick={() => nextPage()}>next</button>
          <button disabled={currentPage === maxPag? true: false} className={s.btn} onClick={() => lastPage()}>{'>>'}</button>
        </div>
        {
          // console.log(currentCountries)
          // linea 80 Porque si hago el paginado y luego busco un pais no lo muestra
          // countries.length === 1 ? (
          //   <Country
          //     id={countries[0].id}
          //     flag_img={countries[0].flag_img}
          //     name={countries[0].name}
          //     region={countries[0].region}
          //     key={countries[0].id}
          //     activities={countries[0].activities}
          //   />) :
          
            (currentCountries.length >0? typeof currentCountries === 'object' ? currentCountries.map((e) => (
              <Country
                id={e.id}
                flag_img={e.flag_img}
                name={e.name}
                region={e.region}
                key={e.id}
                activities={e.activities}
              />)) : <div className={s.fail}>
              <h2 >{countries}</h2>
              <img className={s.failimg} src={img} alt="not found" />
            </div>
            : <div className={s.loading}>
              <img className={s.loadingimg} src={imgloading2} alt="not found" />
              <div>Loading...</div>
            </div> )
        }
      </div>
    </div>
  );
}


