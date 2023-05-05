import React from 'react';

//components
import Storise from '../Storise/Storise';
import Posts from "../Posts/Posts";

//Styled
import "./Home.scss";

function Home() {
  return (
    <div className='home'>
      <Storise/>
      <Posts/>
    </div>
  )
}

export default Home