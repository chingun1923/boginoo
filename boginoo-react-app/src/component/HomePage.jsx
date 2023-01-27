import React from "react";
import { Link } from "react-router-dom";
import { Header } from "./header";
import { Body } from "./body";
import { Footer } from './footer';

export const Home = () => {
  return (
    <div>
        <div className="header">
        <Link className="info" to="/info">Хэрхэн ажилдаг вэ</Link>
        <Link className="login" to="/login">Нэвтрэх</Link>
        </div>
        <Header/>
        <Body/>
        <Footer/>
    </div>
  )
}
