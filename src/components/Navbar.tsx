import { useState } from "react"
import "../styles/navbar.css"
import logo from "../assets/images/logo.jpg"
import { Link } from "react-router-dom"

export default function Navbar(){

  const [open, setOpen] = useState(false)

  return(

    <nav className="navbar">

      <div className="navbar-container">

        <div className="logo">
          <img src={logo} alt="Wong Karate-Do" />
        </div>

        <ul className={`menu ${open ? "open" : ""}`}>

          <li><Link to="/" onClick={() => setOpen(false)}>HOME</Link></li>
          <li><a href="#about" onClick={() => setOpen(false)}>O SENSEI</a></li>
          <li>VÍDEOS</li>
          <li><Link to="/karate" onClick={() => setOpen(false)}>O KARATE</Link></li>
          <li>NOTÍCIAS</li>
          <li>CONTATO</li>

        </ul>

        <div 
          className={`hamburger ${open ? "active" : ""}`} 
          onClick={() => setOpen(prev => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

    </nav>

  )
}