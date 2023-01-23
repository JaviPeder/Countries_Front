import React, { useState ,useEffect } from "react";
import { useDispatch, useSelector  } from "react-redux";
import s from "./searchactivity.module.css";
import { getCountries, FilterByActiv, getActivities} from "../../actions";

export default function SearchActivity() {
  const activities = useSelector((state) => state.activities);
  const [activity, setActivity] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

// console.log(activity)
// refrescar la pagina
const activityHandler = (e) => {
    e.preventDefault();
    setActivity(e.target.value);
  };

  const searchActHandler = (e) => {
    e.preventDefault();
    getCountries();
    setTimeout(() => {
      dispatch(FilterByActiv(activity));
    }, 200);
    // console.log(activity);
    setActivity("");
  };
  return (
    <div className={s.contenedor}>
      {/* <label>Search by activity</label> */}
      <input autoComplete='off' className={s.input} placeholder="Search your activity" value={activity} onChange={activityHandler} list="activities"  autocomplete="off" />
        <datalist id="activities">
        {
          activities?.map(a => <option key={a.id}>{a.name}</option>)
        }
        </datalist>
      <button type="submit" className={s.btn} onClick={searchActHandler}>Search</button> 
  </div>
  );
};






