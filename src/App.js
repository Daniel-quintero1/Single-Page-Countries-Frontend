import './App.css';
import Detail from './Componentes/Detail/Detail';
import Home from './Componentes/Home/Home';
import Landing from './Componentes/Landing/Landing';
import NavBar from "./Componentes/NavBar/NavBar" 
import Form from './Componentes/Form/Form';


import { Route, Routes, useLocation } from "react-router-dom"

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <div>{location.pathname !== "/" && <NavBar />}</div>

      <Routes>
        <Route exact path='/' element={<Landing />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/detail/:id' element={<Detail />}/>
        <Route path='/form' element={<Form />}/>
      </Routes>
    </div>
  );
}

export default App;
