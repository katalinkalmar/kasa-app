import { useState } from 'react';
import fleche from "../../assets/arrow.svg"


export default function Collapse(props) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    function toggleCollapse() {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div>
            <div className="barreDepliant">
                <h2> {props.aproposTitre} </h2>

                <img
                    src={fleche}
                    onClick={toggleCollapse}
                    className={isCollapsed ? "fleche" : "fleche rotated"}
                />

            </div>
            <div className={`collapse ${isCollapsed ? 'collapsed' : ''}`}>
                {props.aproposTexte}
            </div>
        </div>
    );
};


