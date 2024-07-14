import { Link } from "react-router-dom"
import "./ErrorPage.scss"

function ErrorPage() {
    return (
        <div className="body-error">
            <p className="quatrecquatre">404</p>
            <div className="oups">"Oups! La page que vous demandez n'existe pas."</div>
            <div id="retour-accueil">
                <Link to="/">Retourner sur la page d'accueil</Link></div>
        </div>
    )
};

export default ErrorPage