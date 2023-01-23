import React, { useEffect } from "react";
import { getCountries } from "../../actions/index.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AllCountries from "../AllCountries/AllCountries.jsx";

// import Nav from "../Nav/Nav.jsx";
import s from "./home.module.css"

export default function Home() {
  const dispatch = useDispatch();
    const allCountries = useSelector((state)=> state.countries)

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  console.log(allCountries.length)
  return (
    
    <div className={s.homeall}>
      <div className={s.countriesall}>
        <AllCountries />
      </div>
    </div>
  );
}

