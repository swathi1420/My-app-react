import './App.css';
import Dashboard from './containers/Dashboard';
import Login from './containers/Login';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './containers/Display/Home';
import About from './containers/Display/About';
import Contact from './containers/Display/Contact';
import { Link } from 'react-router-dom';




const App = () => {
  
  return (
    <>
    <BrowserRouter>
    
    
    <Switch>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/" exact component={Login}></Route>
      <Route path="/dashboard" exact component={Dashboard} >
        {/*<Route path="/dashboard/menu1" exact component={Home} />
        <Route path="/dashboard/menu2" exact component={About} />
        <Route path="/dashboard/menu3" exact component={Contact} /> */}
      </Route>
      
      <Route path="/dashboard/menu1"  exact component={Home} />

      {/* <Route path="/" exact component={Login}></Route> // redirect to login */}
      {/* <Route path="*" exact component={Login}></Route> //not found */}
      
      {/* <Route path="/home" exact component={{}}></Route> */}
    </Switch>
    </BrowserRouter>
   
    </>
  );
}

export default App;

