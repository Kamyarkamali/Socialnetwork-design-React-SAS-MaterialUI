import React from 'react';
import './App.css';

//ReactRouterDom
import { Routes , Route } from "react-router-dom";

///Components
import Login from './Pages/Login/Login';
import Regester from "./Pages/Regester/Regester";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/singup' element={<Regester/>}/>
      <Route path='/profile' element={<Profile/>}/>

      </Routes>
    </div>
  )
}

export default App
