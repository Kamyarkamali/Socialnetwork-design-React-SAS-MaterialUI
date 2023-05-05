import React, { useState } from 'react';
import './App.css';

//ReactRouterDom
import { Routes , Route , Outlet, Navigate} from "react-router-dom";

///Components
import Login from './Pages/Login/Login';
import Regester from "./Pages/Regester/Regester";
import Profile from "./Pages/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";
import LeftBar from "./Components/LeftBar/LeftBar";
import RightBar from './Components/RightBar/RightBar';
import Home from "./Pages/Home/Home";
import "./styled/Styled.scss";

function App() {
  const [dark,setDark]=useState(false)
  const currentUser=true
  const Layout=()=>{
    return(
      <div className={dark ? "dark" : "light"}>
          <Navbar dark={dark} setDark={setDark}/>
        <div style={{display:"flex"}}>
          <LeftBar/>
          <div style={{flex:6}}>
          <Outlet/>
          </div>
          <RightBar/>
        </div>
      </div>
    )
  }

  const CheckLogin=({children})=>{
    if(!currentUser){
      return <Navigate to={"/login"}/>
    }
    return children
  }

  return (
    <div className="App">
      <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/singup' element={<Regester/>}/>
      <Route path='/profile/:id' element={<Profile/>}/>
      <Route path='/' element={
        <CheckLogin>
          <Layout/>
        </CheckLogin>
      }>

          <Route path='/' element={<Home/>}/>
      </Route>

      </Routes>
    </div>
  )
}

export default App
