import React from "react"
import { useParams, Navigate } from "react-router-dom"
import donneeLogement from "../../donnees/logements.json"
import Etiquette from "../../components/Etiquette/Etiquette"
import Notation from "../../components/Notation/Notation"
import Collapse from "../../components/Collapse/Collapse"
import Carrousel from "../../components/Carrousel/Carrousel"

export default function FichesLogement() {
    const { id } = useParams()
    const ficheLogement = donneeLogement.find(
        (logement) => logement.id === id
    )

    return (
        <React.Fragment>
            {ficheLogement ? (
                <div className="body-fiche">
                    <Carrousel listeImages={ficheLogement.pictures} />
                    <div className="infobox">
                        <div className="info1">
                            <div className="box-titre">
                                <span className="titre-logement" >{ficheLogement.title}</span>
                                <span className="localisation-logement">{ficheLogement.location}</span>
                            </div>
                            <div className="box-proprietaire">
                                <span classname="nom-proprietaire">{ficheLogement.host.name}</span>
                                <img src={ficheLogement.host.picture} alt="" />
                            </div>
                        </div>
                        <div className="info2">
                            <div className="etiquette">
                                {ficheLogement.tags.map((elementEtiquette) => {
                                    return <Etiquette nomEtiquette={elementEtiquette} />
                                })}
                            </div>
                            <div className="note">
                            <Notation note={ficheLogement.rating} />
                            </div>

                        </div>
                        <div className="info3">
                           
                            <Collapse
                                aproposTitre="Description"
                                aproposTexte={ficheLogement.description}
                            />
                            <Collapse
                                aproposTitre="Équipements"
                                aproposTexte={ficheLogement.equipments.map(
                                    (elementEquipement) => { return <ul>{elementEquipement}</ul> }
                                )}
                            />
                            
                        </div>
                    </div>
                </div>
            ) : (<Navigate replace to="/idnotfound" />)}
        </React.Fragment>
    )
}