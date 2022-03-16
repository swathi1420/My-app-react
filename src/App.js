import './App.css';
import Dashboard from './containers/Dashboard';
import Login from './containers/Login';
import { BrowserRouter, Route, Switch } from "react-router-dom";




const App = () => {
  
  return (
    <>
    <BrowserRouter>
    <Login />
    <Switch>
    <Route path="/dashboard" exact component={Dashboard}></Route>
    </Switch>
    </BrowserRouter>
   
    </>
  );
}

export default App;

