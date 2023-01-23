import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import s from "./nav.module.css";
import { useDispatch} from "react-redux";
import { getCountries, orderAlpha, orderCont, orderAlphaRev, orderPop, orderPopRev } from "../../actions/index.js";
import SearchBar from "../SearchBar/SearchBar.jsx";
import SearchActivity from "../SearchActivity/SearchActivity";
import img from "../../img/Mundo_hecho_de_Banderas.gif"


export default function NavBar({setPage}) {
  // const countries = useSelector((state) => state.countries);
  const [sort, setSort] = useState("");
  const [region, setRegion] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (region === "all") {
      dispatch(getCountries());
      setPage(1)
    }else{
        setTimeout(() => {
          dispatch(orderCont(region));
        }, 200);
        setPage(1)
      }
    // eslint-disable-next-line
  }, [region]);

  useEffect(() => {
    if (sort === "all") dispatch(getCountries());
    else if (sort === "a-z") dispatch(orderAlpha());
    else if (sort === "z-a") dispatch(orderAlphaRev());
    else if (sort === "incremenetpopulation") dispatch(orderPop());
    else if (sort === "decrementpopulation") dispatch(orderPopRev());
    // eslint-disable-next-line
  }, [sort]);

  return (
    <div className={s.total}>
      <img src="" alt="" />
      <Link to="/" className={s.logo}>
        <p>World-Scanner</p>
        <img className={s.img} src={img} alt="" />
      </Link>
      <div className={s.container}>
        <SearchBar setPage={setPage}/>
        <SearchActivity />
        <div className={s.sort_filter}>
          <div className={s.sort}>
            <p>Sort by</p>
            <select className={s.select} onChange={(e) => setSort(e.target.value)}>
              <option value="all">-</option>
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
              <option value="incremenetpopulation">🡅 population</option>
              <option value="decrementpopulation">🡇 population</option>
            </select>
          </div>
          <div className={s.sort}>
            <p>Filter by Continent</p>
            <select className={s.select} onChange={(event) => setRegion(event.target.value)}>
              <option value="all">All</option>
              <option value="Americas">Americas</option>
              <option value="Europe">Europe</option>
              <option value="Africa">Africa</option>
              <option value="Oceania">Oceania</option>
              <option value="Asia">Asia</option>
            </select>
          </div>
        </div>
      </div>
      {/* <h5>Filtered: {state.countries.length}</h5>  */}
      <div className={s.borderactiv}>
        <Link to="/activities" className={s.activities}>
          Create and view all activities
        </Link>
      </div>

    </div>
  );
};





