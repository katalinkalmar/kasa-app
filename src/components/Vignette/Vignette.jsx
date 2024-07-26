//Je récupère le hook useNavigate de la librairie router.
import { useNavigate } from "react-router-dom"

//Le composant vignette recoit 3 props: imageSrc : L'URL de l'image , titre de la vignette et l'id de la fiche.
export default function Vignette(props) {
    const navigate = useNavigate();
    return (
        <div className="corps-vignette" onClick={() => { navigate(`/fichelogement/${props.ficheId}`) }}>
            <img src={props.imageSrc} alt=""/>
            <span>{props.titreVignette}</span>
        </div>
    )
}
