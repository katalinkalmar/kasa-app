//J'importe les hooks useParams et Navigate. 
//UseParams me permet d'accéder aux id des logements.
//Navigate me permettra de changer de page si l'id est non trouvé.
import { useParams, Navigate } from "react-router-dom"
import donneeLogement from "../../donnees/logements.json"
import Etiquette from "../../components/Etiquette/Etiquette"
import Notation from "../../components/Notation/Notation"
import Collapse from "../../components/Collapse/Collapse"
import Carrousel from "../../components/Carrousel/Carrousel"

export default function FichesLogement() {
    //je récupère l'id de la fiche logement présente dans l'url à l'aide du hook useParams.
    const { id } = useParams()

    // On récupère les données du logement à l'aide de l'id dans le fichier json
    const ficheLogement = donneeLogement.find(
        (logement) => logement.id === id
    ) //logement est null si l'id n'existe pas

    return (
        <>
            {/* on teste si la fiche logement existe */}
            {ficheLogement ? (
                <div className="body-fiche">
                    <Carrousel listeImages={ficheLogement.pictures} />
                    <div className="infobox">

                        <div className="info1">
                            <div className="box-titre">
                                <span className="titre-logement" >{ficheLogement.title}</span>
                                <span className="localisation-logement">{ficheLogement.location}</span>
                            </div>
                            <div className="etiquette">
                                {ficheLogement.tags.map((elementEtiquette, key) => {
                                    return <Etiquette nomEtiquette={elementEtiquette} key={key} />
                                })}
                            </div>
                        </div>

                        <div className="info2">
                            <div className="box-proprietaire">
                                <span classname="nom-proprietaire">{ficheLogement.host.name}</span>
                                <img src={ficheLogement.host.picture} alt="" />
                            </div>
                            <div className="note">
                                <Notation note={ficheLogement.rating} />
                            </div>
                        </div>

                    </div>

                    <div className="info3">
                        <Collapse aproposTitre="Description" aproposTexte={<p>{ficheLogement.description}</p>} />
                        <Collapse aproposTitre="Équipements" aproposTexte={ficheLogement.equipments.map((elementEquipement) => { return <ul>{elementEquipement}</ul> })} />
                    </div>

                </div>
            ) : (<Navigate replace to="/idnotfound" />)/* si fiche logement est null, on renvoie l'utilisateur 
                                                        sur la page 404. A l'aide du composant Navigate.*/} 
        </>
    )
}