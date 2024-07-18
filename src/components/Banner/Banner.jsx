import logoKasa from "../../assets/LOGO.svg"
import { Link } from "react-router-dom"


export default function Banner() {
    return (
        <div className="banner">
        <img src= {logoKasa} alt="logo"/>
            <div className="nav">
          <ul> 
            <li> <Link to="/">Accueil</Link></li>
            <li><Link to="/Apropos">A Propos</Link></li>
            </ul>
            </div>
        </div>
    )
}
