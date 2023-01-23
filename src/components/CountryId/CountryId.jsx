import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCountry } from "../../actions";
import img from "../../img/Mundo_hecho_de_Banderas.gif"
import s from "./countryId.module.css";

export default function CountryId(){
    // countryDetail detalles de cada pais
    
    const country = useSelector((state) => state.countryDetail);
    const dispatch = useDispatch();
    let { id } = useParams();
    // me guardo el id
    
    useEffect(() => {
        dispatch(getCountry(id));
 // eslint-disable-next-line
      }, [id]);
// mientras tenga id
// console.log(country.activities)
    return (
        // <h1>hola</h1>
        <div className={s.todo}>
            <div className={s.container}>
                <div className={s.barra}>
                   <div className={s.logo}>
                     <p>World-Scanner</p>
                    <img className={s.img} src={img} alt="" />
                   </div>
                    <Link className='' to="/home" ><button className={s.btnhome}>Back to home</button></Link>
                </div>
           
                <div className=''>
                    <h1 className={s.name}>{country.name}</h1>
                    <img className={s.flag} src={country.flag_img} alt="No img" />
                    <div className={s.description}>
                    <h4>Continent: <hr />{country.region}</h4>
                    <h4>Subregion: <hr /> {country.subregion}</h4>
                    <h4>Capital: <hr />{country.capital}</h4>
                    <h4>Area: <hr />{country.area} Km2</h4>
                    <h4>Population: <hr />{country.population} Hab. </h4>
                    <h4>Código internacional alpha3: <hr />{country.id}</h4>
                    </div>
               
                    <div>
                    <h4 className={s.activitiestitle}>Actividades:</h4>
                    <div className={s.activities}>
                        {country.activities?.map(a=> <h5 key={a.id}>{a.name}</h5>)} 
                    </div>
                   
                    </div>
                    {/* <div className=''>
                        <Activities countryName={country.name} activities={country.activities}/>
                    </div> */}
                </div>

            </div>
        </div>
    )
}
