import { useState } from "react"
import axios from 'axios';

export const Body = () => {
    const [link, setLink ] = useState("");
    const [code, setCode ] = useState("");

    const UrlShortener = async() => {
        const result = await axios.post(`http://localhost:8000/url`, {
            longUrl: link
        })
        console.log(result.data);
        setCode(result.data.urlCode)
    }

     return (
        <div className="body">
            <div className="logo">
                <img src="/logo-default.png"/>
            </div>
            <div className="input">
                <div>
                    <input className="web" placeholder="https://www.web-huudas.mn" onChange={(e) => setLink(e.target.value)}  ></input>
                </div>
                <div>
                    <button className="boginosgoh" onClick={UrlShortener} >Богиносгох</button>
                </div>
                <div id="url">
                    full url : {link}
                    shortened : `http://localhost:8000/{code}`
                </div>
            </div>
        </div>
     )
}