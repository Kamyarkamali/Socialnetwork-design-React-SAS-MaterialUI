import React, { useContext } from 'react';
//Styled
import "./Login.scss";
import { Link } from 'react-router-dom';

import { CurrentUser } from '../../Context/author';

function Login() {
  const {login}=useContext(CurrentUser)

  const loginHandel=()=>{
    login()
  }

  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>سلام!خوش آمدید</h1>
          <p>امیدواریم که از بودن در این شبکه لذت ببرید , دوستانی جدید پیدا کنید و لحظات خوشی را داشته باشید</p>
          <Link to={"/singup"}>
         <span>اکانت ندارید؟</span> 
          </Link>
         <button className='btn'>ثبت نام</button>
        </div>
        <div className="right">
          <Link to={"/profile"}>
          <h1>وارد شوید</h1>
          </Link>
          <form>
            <input className='inputt' type="text" placeholder='ایمیل یا شماره تماس' />
            <input className='inputt' type="password" placeholder='رمز ورود'/>
            <Link to={"/profile"}>
            <button onClick={loginHandel}>ورود</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login