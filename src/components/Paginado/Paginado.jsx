import React from "react";
import "./paginado.css"

export default function Paginado({ countriesPerPage, countries, paginado,page }) {
    const pageNumbers = [];
    for (let i = 0; i < Math.ceil(((countries.length-countriesPerPage) / (countriesPerPage+1))+1); i++) {
        pageNumbers.push(i+1)
        // creo la numeracion del paginado

        // ((250-9)/10)+1
    }
 
        
    return (
        <nav>
            <ul className="paginado">
            {typeof countries !== 'string' ? pageNumbers.map(number => (
                <li className={page===number? 'pageselect':null} key={number}>
                    <p  onClick={() => paginado(number)}>{number}</p>
                </li>
                )):<div> <p>1</p> </div> }
            </ul>
        </nav>
    )
} 