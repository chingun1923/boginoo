import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Checking = async () => {
        const result = await axios.get(`http://localhost:5 000/${email}/${password}`)
        if(result.data.result === null) {
            alert("email passwordoo hiine uu");
        } else {
            window.location.href = `/`
        }
    }

    return ( 
        <div>
         <Link className="info2" to="/info">Хэрхэн ажилдаг вэ</Link>
         <div className="logo2">
                <img src="/logo-default.png"/>
         </div>
         <span className="nevtreh2">Нэвтрэх</span>
         <div className="nevtrelt">
            <h5>Цахим хаяг</h5>
            <input className="web" placeholder="https://www.web-huudas.mn" onChange={(e) => setEmail(e.target.value)} ></input>
         </div>
         <div className="nevtrelt2">
            <h5>Нууц үг</h5>
            <input className="web" type='password' onChange={(e) => setPassword(e.target.value)} ></input>
         </div>
         <div className="nevtrelt3">
         <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
        />
        <label className="check" for="vehicle1"> Намайг сана</label>
        <Link className="password" to="/forget">Нууц үгээ мартсан</Link>
        </div>
        <button className="oroh" onClick={Checking} >
            Нэвтрэх
        </button>   
        <Link className="sign" to="/sign">Шинэ хэрэглэгч бол энд дарна уу?</Link>
        <div className="footer2">
            <h4> Made with ♥️ by PineCone Academy</h4>
            <h3>©boginoo.io 2020</h3>
        </div>
        </div>
    
    )
}