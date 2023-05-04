import React from 'react';
import {Link} from "react-router-dom";

import "./Regester.scss";

function Regester() {
  return (
    <div className='regester'>
    <div className="card">
      <div className="left">
        <h1>شبکه اجتماعی تهران</h1>
        <p>امیدواریم که از بودن در این شبکه لذت ببرید , دوستانی جدید پیدا کنید و لحظات خوشی را داشته باشید</p>
        <Link to={"/login"}>
       <span>با اکانت خودتان وارد شوید</span> 
        </Link>
       <button>ورود</button>
      </div>
      <div className="right">
        <h1>ثبت نام</h1>
        <form>
          <input className='inputt' type="text" placeholder="نام"/>
          <input className='inputt' type="text" placeholder="فامیلی"/>
          <input className='inputt' type="password" placeholder='رمز ورود'/>
          <input className='inputt' type="password" placeholder='تکرار رمز ورود'/>
          <button>ورود</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Regester