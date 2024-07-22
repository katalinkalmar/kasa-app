import { useState } from 'react';
import fleche from "../../assets/arrow.svg"


export default function Collapse(props) {
    const [estOuvert, setEstOuvert] = useState(false);

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


