import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Dashboard from './containers/Dashboard';
import Login from './containers/Login';
import About from "./containers/Display/About";
import Contact from "./containers/Display/Contact";
import Home from "./containers/Display/Home";



const App = () => {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/login" exact element={<Login />}></Route>
      <Route path="/" exact element={<Login/>}></Route>
      <Route path="/dashboard" exact element={<Dashboard />}>
      <Route path="/dashboard/menu1" element={<Home/>}></Route>
      <Route path="/dashboard/menu2" element={<About/>}></Route>
      <Route path="/dashboard/menu3" element={<Contact/>}></Route>
      </Route>

      {/* <Route path="/" exact element={Login}></Route> // redirect to login */}
      {/* <Route path="*" exact element={Login}></Route> //not found */}
      
      {/* <Route path="/home" exact element={{}}></Route> */}
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

