import React from "react";
import { Link } from "react-router-dom";

export const Forget = () => {
    return (
        <div>
                     <Link className="info2" to="/info">Хэрхэн ажилдаг вэ</Link>
         <div className="logo2">
                <img src="/logo-default.png"/>
         </div>
         <span className="nevtreh3">Нууц үг сэргээх</span>
         <h4 className="text">Бид таны цахим хаяг руу нууц үг
         сэргээх хаяг явуулах болно.</h4>
         <div className="nevtrelt">
            <h5>Цахим хаяг</h5>
            <input className="web2" placeholder="https://www.web-huudas.mn"></input>
         </div>
         <button className="oroh">
            Илгээх
        </button>
        <div className="footer2">
            <h4> Made with ♥️ by PineCone Academy</h4>
            <h3>©boginoo.io 2020</h3>
        </div>
        </div>
        
    )
}