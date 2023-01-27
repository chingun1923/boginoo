import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';


export const Sign = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");

    const postData = async () => {
        const POST = await axios.post(`http://localhost:5000/user`, {
            email: email,
            password: password
        })
        console.log(POST);
        if(email == "") {
            alert("email")
        } else {
            if(password == "") {
                alert("password oo bichne uu")
            } else {
                if(password !== repassword) {
                    alert("2 pass buruu bn")
                } else {
                    window.location.href = `/`
                }
            }
        }
    }

    return (
        <div>
         <Link className="info2" to="/info">Хэрхэн ажилдаг вэ</Link>
         <div className="logo2">
                <img src="/logo-default.png"/>
         </div>
         <span className="nevtreh2">Нэвтрэх</span>
         <div className="nevtrelt10">
            <h5>Цахим хаяг</h5>
            <input className="web" placeholder="https://www.web-huudas.mn" onChange={(e) => setEmail(e.target.value)} ></input>
         </div>
         <div className="nevtrelt2">
            <h5>Нууц үг</h5>
            <input className="web" placeholder='please creat your password' type='password' onChange={(e) => setPassword(e.target.value)} ></input>
         </div>
         <div className="nevtrelt2">
            <h5>Нууц үгээ давтна уу?</h5>
            <input className="web" placeholder='please repeat your password' type='password'onChange={(e) => setRepassword(e.target.value)} ></input>
         </div>
        <button className="oroh" onClick={postData} >
            Бүртгүүлэх
        </button>   
        <div className="footer2">
            <h4> Made with ♥️ by PineCone Academy</h4>
            <h3>©boginoo.io 2020</h3>
        </div>
        </div>
    )
} 