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
                            <div>
                                <h2 className="titre-logement" >{ficheLogement.title}</h2>
                                <h4 className="localisation-logement">{ficheLogement.location}</h4>
                            </div>
                            <div>
                                <h4 classname="nom-proprietaire">{ficheLogement.host.name}</h4>
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
                            <section className="info-description">
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
                            </section>
                        </div>
                    </div>
                </div>
            ) : (<Navigate replace to="/idnotfound" />)}
        </React.Fragment>
    )
}