import Collapse from "../../components/Collapse/Collapse"
// J'importe les données apropos qui contiennent titre et texte.
import donneesApropos from "../../donnees/apropos.json"
import image from "../../assets/ImageSource2.png"

export default function Apropos() {
    return (
        <div className="bodyApropos">
            <img className="imageBanner" src={image} alt="" />
            <div className="collapseList">
                {donneesApropos.map(
                    (elementApropos, key) => {
                        /*la fonction map me permet de récuperer pour chaque 
                        collapse ses props: son titre et son texte */ 
                        return <Collapse
                            aproposTitre={elementApropos.aproposTitre}
                            aproposTexte={<p>{elementApropos.aproposTexte}</p>}
                            key={key}
                        />
                    }
                )}
            </div>
        </div>
    )
}
