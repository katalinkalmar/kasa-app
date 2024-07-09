import { useState } from 'react';
import "../style/Collapse.scss";
import fleche from "../assets/arrow.svg"


export default function Collapse() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    function toggleCollapse() {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div>
            <div className="barreDepliant">
                <h2 >Equipement</h2>

                <img 
                    src={fleche} 
                    onClick={toggleCollapse} 
                    className={isCollapsed ? "fleche" : "fleche rotated"} 
                />

            </div>
            <div className={`collapse ${isCollapsed ? 'collapsed' : ''}`}>
                <p>Contenu à afficher</p>
            </div>
        </div>
    );
};


