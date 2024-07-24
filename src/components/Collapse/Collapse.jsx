//Je récupère le hook {useState} de la librairie router.
//Il permet de gérer l'état interne du composant: ouvert ou fermé.
import { useState } from 'react';
import fleche from "../../assets/arrow.svg"

//On utilise useState pour créer une variable d'état estOuvert et une fonction
//pour mettre à jour sa valeur. Le collapse est fermé par défaut.
export default function Collapse(props) {
    const [estOuvert, setEstOuvert] = useState(false);

 //Dans la fonction toggleCollapse l'opérateur NON (!) inverse la valeur  
 //de estOuvert ce qui permet de basculer d'un état à l'autre.   
    function toggleCollapse() {
        setEstOuvert(!estOuvert);
    };

    return (
        <div>
            <div className="barreDepliant">
                <h2> {props.aproposTitre} </h2>

                <img alt=""
                    src={fleche}
                    onClick={toggleCollapse}
                    className={estOuvert ? "fleche" : "fleche rotated"}
                />

            </div>
            <div className={`collapse ${estOuvert ? 'ouvert' : ''}`}>
                {props.aproposTexte}
            </div>
        </div>
    );
};


