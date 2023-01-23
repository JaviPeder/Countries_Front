
const initialState = {
    countries: [],
    allCountries: [],
    countryDetail: [],
    activities:[],
    allactivities:[],
    activSelect:[]
  };
 console.log(initialState.activSelect)
  //Ordeno alfabeticamente
  const ordAlpha = (a , b) =>{
    if(a.name < b.name) return -1
    if(b.name < a.name) return 1 
    return 0
}
// Ordeno la poblacion de menor a mayor
 const ordPop = (a, b) =>{
    return a.population - b.population
}


  const rootReducer = (state = initialState, action) => {
    switch (action.type) {

      case "GET_COUNTRIES": {
        return {
          ...state,
          countries: action.payload,
          allCountries: action.payload
        };
      }
      case "GET_COUNTRY": {
        return {
          ...state,
          countryDetail: action.payload,
        };
      }
      case "GET_BY_NAME": {
        // console.log(action.payload)
        return {
          ...state,
          countries: action.payload,
        };
      }
      case "ORD_ALPHA": {
        const allcountriesalp =  state.allCountries
        return {
          ...state,
          countries: allcountriesalp.slice().sort(ordAlpha),
        };
      }
  
      case "ORD_ALPHA_REV": {
        const allcountriesalpr =  state.allCountries
        return {
          ...state,
          countries: allcountriesalpr.slice().sort(ordAlpha).reverse(),
        };
      }
  
      case "ORD_POPULATION": {
        const allcountriespop =  state.allCountries
        return {
          ...state,
          countries: allcountriespop.slice().sort(ordPop),
        };
      }
  
      case "ORD_POPULATION_REV": {
        const allcountriespopu =  state.allCountries
        return {
          ...state,
          countries: allcountriespopu.slice().sort(ordPop).reverse(),
        };
      }
      case "FILTER_CONTINENT": {
        const allcountries =  state.allCountries
        
        return {
          ...state,
          countries: allcountries.filter((c) => c.region === action.payload),
        };
      }
      case "FILTER_BY_ACTIV": {
        const allcountriesactiv =  state.allCountries
        return{
          ...state,
          countries: allcountriesactiv.filter((c)=>{ return c.activities.some((a)=> a.name === action.payload)   
          })
      }
      }
      case "GET_ACTIVITIES": {
        return {
            ...state,
            activities: action.payload,
            allactivities: action.payload
        }
      }

    case "POST_ACTIVITY":{
        return{
            ...state
        }
    }
    
    case "UPDATE_ACTIV":{
      return{
          ...state
      }
  }
    case "DELETE_ACTIV_BY_NAME":{
        return{
            ...state
        }
    }
    case "SELECTACTIV": {
      const activ =  state.activities
      // console.log(typeof action.payload)
      // console.log(state.activities)
      // console.log(state.allactivities)
      return{
        ...state,
        activSelect: activ.filter(e=> e.id === action.payload)
    }
    }
    // console.log(activitySelect)
      default:
        return state;
    }  
};

export default rootReducer;