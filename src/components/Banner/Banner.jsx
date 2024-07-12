import logoKasa from "../../assets/LOGO.svg"
import { Link } from "react-router-dom"


export default function Banner() {
    return (
        <div className="banner">
        <img src= {logoKasa}/>
            <div className="nav">
            <Link to="/">Accueil</Link>
            <Link to="/Apropos">A Propos</Link>
           
            </div>
        </div>
    )
}
