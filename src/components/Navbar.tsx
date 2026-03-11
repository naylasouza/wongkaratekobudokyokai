import "../styles/navbar.css"
import logo from "../assets/images/logo.jpg"
import { Link } from "react-router-dom"

export default function Navbar(){

return(

<nav className="navbar">

<div className="logo">
<img src={logo} alt="Wong Karate-Do" />
</div>

<ul className="menu">

<li>
<Link to="/">HOME</Link>
</li>

<li>
<a href="#about">O SENSEI</a>
</li>

<li>VÍDEOS</li>

<li>
<Link to="/karate">O KARATE</Link>
</li>

<li>NOTÍCIAS</li>

<li>CONTATO</li>

</ul>

</nav>

)

}