import Banner from "../../components/Banner"
import { Link } from "react-router-dom"
function ErrorPage() {
    return <div>
        <Banner />

    404
        Oups! La page que vous demandez n'existe pas.
        <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
}

export default ErrorPage