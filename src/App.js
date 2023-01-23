import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home  from './components/Home/Home.jsx';
import CountryId from "./components/CountryId/CountryId.jsx";
import Activities from './components/Activities/Activities.jsx';
import CreateActivity from './components/CreateActivity/CreateActivity';
import UpdateActivity from './components/UpdateActivity/UpdateActivity';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/home" component={Home}/>
    <Route path="/countries/:id" component={CountryId} />
     <Route exact path ="/activities"component={Activities} />
     <Route path ="/activities/createActivity"component={CreateActivity} />
     <Route exact path ="/activities/:id"component={UpdateActivity} />
      {/* <h1>Henry Countries</h1> */}
  
      </Switch>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
