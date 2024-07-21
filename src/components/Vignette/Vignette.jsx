//Je récupère le hook useNavigate de la librairie router.
import { useNavigate } from "react-router-dom"

export default function Vignette(props) {
    const navigate = useNavigate();
    return (
        <div className="corps-vignette" onClick={() => { navigate(`/fichelogement/${props.ficheId}`) }}>
            <img src={props.imageSrc} alt=""/>
            <span>{props.titreVignette}</span>
        </div>
    )
}
