import { Link } from "react-router-dom"


export default function Vignette(props) {
    return (
        <div className="corps-vignette">
            <img src={props.imageSrc} />
            <div>
                <h4>{props.titreVignette}</h4>
            </div>
        </div>
    )
}
