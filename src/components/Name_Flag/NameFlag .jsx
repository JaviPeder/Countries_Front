import React from "react";
import { useSelector } from "react-redux";
import s from "./Name_Flag.module.css"

export default function Name_Flag({ id, onClose }) {
    // console.log(Country)
    // console.log(id)
    const allCountries = useSelector((state) => state.countries)
    let countrySearch = allCountries.filter(e => e.id === id)
    // console.log(countrySearch)
    return (
        <div className={s.container}>
            <h3 className={s.name}>{countrySearch[0].name}</h3>
            <img className={s.flag} src={countrySearch[0].flag_img} alt="no img" />
            <button className={s.close} onClick={onClose}>Remove</button>
        </div>
    );
};