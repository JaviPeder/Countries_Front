import React, { useState } from "react";
import "./paginado.css"

export default function Paginado({ countriesPerPage, countries, paginado, page }) {
    const [minPage, setMinPage] = useState(0);
    const [maxPage, setMaxPage] = useState(5);

    const pageNumbers = [];
    for (let i = 0; i < Math.ceil(((countries.length - countriesPerPage) / (countriesPerPage + 1)) + 1); i++) {
        pageNumbers.push(i + 1)
        // creo la numeracion del paginado

        // ((250-9)/10)+1
    }
       const lastPage = Math.ceil(((countries.length - countriesPerPage) / (countriesPerPage + 1)) + 1)
    let pageGroup= pageNumbers.slice(minPage,maxPage)
    function nextGroup() {
        setMinPage(minPage+5);
        setMaxPage(maxPage+5)
      }
      function prevGroup() {
        if(minPage)
        setMinPage(minPage-5);
        setMaxPage(maxPage-5)
      }
console.log(pageGroup)
console.log(lastPage)
console.log(maxPage)
    return (
        <nav>
            <ul className="paginado" >
                <p className={minPage === 0? "inactive" : null} onClick= { minPage === 0? null :()=> prevGroup()} >...</p>
                {typeof countries !== 'string' ? pageGroup.map(number => (
                    <li className={page === number ? 'pageselect' : null} key={number}>
                        <p onClick={() => paginado(number)}>{number}</p>
                    </li>
                )) : <div> <p>1</p> </div>}
                <p className={maxPage >= lastPage? "inactive" : null} onClick= {maxPage >= lastPage? null :()=> nextGroup()}>...</p>
            </ul>
        </nav>
    )
} 