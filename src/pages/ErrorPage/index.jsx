//J'importe le composant Link de la bibliothèque react-router-dom.
//Il permet de créer des liens internes sans recharger la page.
import { Link } from "react-router-dom"

export default function ErrorPage() {
    return (
        <div className="body-error">
            <span className="quatrecquatre"> 404 </span>
            <span className="oups"> Oups! La page que vous demandez n'existe pas. </span>
            <Link className="retour-accueil" to="/"> Retourner sur la page d'accueil </Link>
        </div>
    )
};