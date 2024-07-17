import { useNavigate } from "react-router-dom"

export default function Vignette(props) {
    const navigate = useNavigate();
    return (
        <div
            className="corps-vignette"
            onClick={() => { navigate(`/fichelogement/${props.ficheId}`) }}
        >
            <img src={props.imageSrc} />
            <div>
                <h4>{props.titreVignette}</h4>
            </div>
        </div>
    )
}
