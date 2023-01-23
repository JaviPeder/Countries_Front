import axios from "axios";


export function getCountries() {
  return async (dispatch) => {
    const res = await axios.get("/countries/");
    dispatch({ type: "GET_COUNTRIES", payload: res.data });
  };
}

export function getCountry(id) {
    return async (dispatch) => {
      const res = await axios.get(`/countries/${id}`);
      dispatch({ type: "GET_COUNTRY", payload: res.data });
    };
  }

  export function getByName(name) {
    return async (dispatch) => {
       
      try {
       const res = await axios.get(
          `/countries?name=${name}`
        );
        dispatch({ type: "GET_BY_NAME", payload: res.data });
        
    } catch (error) {
      dispatch({ type: "GET_BY_NAME", payload: error.response.data });
      console.log(error);
    }
  };
}

export function orderAlpha() {
    return {
      type: "ORD_ALPHA",
    };
  }
  
  export function orderAlphaRev() {
    return {
      type: "ORD_ALPHA_REV",
    };
  }
  
  export function orderPop() {
    return {
      type: "ORD_POPULATION",
    };
  }
  
  export function orderPopRev() {
    return {
      type: "ORD_POPULATION_REV",
    };
  }
  
  export const orderCont = (region) => {
    return {
      type: "FILTER_CONTINENT",
      payload:region,
    };
  };
  //BUSCO ACTIVIDADES EN LOS PAISES
  export const FilterByActiv = (payload) => {
    return {
      type: "FILTER_BY_ACTIV",
      payload,
    };
  };

//Me traigo las actividades de DB
  export function getActivities() {
    return async (dispatch) => {
      const res = await axios.get(`/activities`);
      dispatch({ type: "GET_ACTIVITIES", payload: res.data });
    };
  }
  

  export function deleteActivity(name){
    return async (dispatch) => {
        try {
          const res = await axios.delete(
            `/activities/`+name);
            dispatch({ type: "DELETE_ACTIV_BY_NAME", payload: res.data });
            
          // dispatch(res.message);
      } catch (error) {
// console.log(res.data.error)
        console.log(error);
      }
    };
  }

  export function postActivity(payload){
    return async(dispatch) =>{
      try {
        const response = await axios.post(`/activities`,payload);
        console.log(response)
        
      } catch (error) {
        console.log(error)
      }
    }
  }

  export function updateActivity(id,payload){
    return async (dispatch) => {
        try {
          const res = await axios.put(
            `/activities/`+id,payload);
            dispatch({ type: "UPDATE_ACTIV", payload: res.data });
            
          // dispatch(res.message);
      } catch (error) {
// console.log(res.data.error)
        console.log(error);
      }
    };
  }

  export function selectActiv(id){
    return  {
      type: "SELECTACTIV",
      payload: parseInt(id),
    };
  };