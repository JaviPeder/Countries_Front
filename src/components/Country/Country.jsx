import React from "react";
import s from "./country.module.css"
import { Link } from "react-router-dom";
export default function Country ({ flag_img, name, region, id, activities }) {
    // console.log(Country)
    return (
        <div className={s.container}>
            <Link className={s.name} to={`/countries/${id}`}>
               <div >{name}</div> 
            <div className=''>
                <img className={s.flag} src={flag_img} alt="no img" />
            </div>
            </Link>
            
            <h3>{region}</h3>
            
            {/* <h3>{activities}</h3> */}


        </div>
    );
};
