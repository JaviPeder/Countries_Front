import React from "react";
import { Link } from "react-router-dom";
import s from "./landingPage.module.css"

export default function landingPage() {
   
   
    return (
        <div className={s.container}>
            
            <div><p>Welcome to World-Scanner!!!</p></div>
            <Link to='/home'>
                <button className={s.button}></button>
            </Link>
        </div>
    )
}

