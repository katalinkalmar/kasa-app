import Collapse from "../../components/Collapse"
import donneesApropos from "../../donnees/apropos.json"
import image from "../../assets/img_apropos.png"
import "./Apropos.scss"

export default function Apropos() {
    return (
        <div className="body">
            <img src={image}/>
            <div className="collapseList">
                {
                    donneesApropos.map(
                        (elementApropos) => {
                            return <Collapse
                                aproposTitre={elementApropos.aproposTitre}
                                aproposTexte={elementApropos.aproposTexte}
                            />
                        }
                    )
                }
            </div>
        </div>
    )
}
