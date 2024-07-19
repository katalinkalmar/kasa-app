import Collapse from "../../components/Collapse/Collapse"
import donneesApropos from "../../donnees/apropos.json"
import image from "../../assets/ImageSource2.png"

export default function Apropos() {
    return (
        <div className="bodyApropos">
            <img className="imageBanner" src={image}/>
            <div className="collapseList">
                {
                    donneesApropos.map(
                        (elementApropos) => {
                            return <Collapse
                                aproposTitre={elementApropos.aproposTitre}
                                aproposTexte={<p>{elementApropos.aproposTexte}</p>}
                            />
                        }
                    )
                }
            </div>
        </div>
    )
}
