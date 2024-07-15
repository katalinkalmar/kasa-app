import React from "react"
import { useParams, Navigate } from "react-router-dom"
import donneeLogement from "../../donnees/logements.json"
import Etiquette from "../../components/Etiquette/Etiquette"
import Notation from "../../components/Notation/Notation"
import Collapse from "../../components/Collapse/Collapse"

export default function FichesLogement() {
    const { id } = useParams()
    const ficheLogement = donneeLogement.find(
        (logement) => logement.id === id
    )

    return (
        <React.Fragment>
            {ficheLogement ? (
                <div className="body-fiche">
                    <img src={ficheLogement.pictures[0]} />
                    <div className="infobox">
                        <div className="info1">
                            <div>
                                <h2>{ficheLogement.title}</h2>
                                <h4>{ficheLogement.location}</h4>
                            </div>
                            <div>
                                <h4>{ficheLogement.host.name}</h4>
                                <img src={ficheLogement.host.picture} />
                            </div>
                        </div>
                        <div className="info2">
                            <div>
                                {ficheLogement.tags.map((elementEtiquette) => {
                                    return <Etiquette nomEtiquette={elementEtiquette} />
                                })}
                            </div>
                            <Notation note={ficheLogement.rating} />


                        </div>
                        <div className="info3">
                            <Collapse
                                aproposTitre="Description"
                                aproposTexte={ficheLogement.description}
                            />
                            <Collapse
                                aproposTitre="Équipements"
                                aproposTexte={ficheLogement.equipments.map(
                                    (elementEquipement)=> { return <ul>{elementEquipement}</ul>}
                                )}
                            />
                        </div>
                    </div>
                </div>
            ) : (<Navigate replace to="/idnotfound" />)}
        </React.Fragment>
    )
}