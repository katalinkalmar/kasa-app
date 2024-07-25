import { useState } from 'react';
import flecheGauche from "../../assets/arrow_back.svg"
import flecheDroite from "../../assets/arrow_forward.svg"

//Le composant Carrousel est défini avec un seul prop: listeImages
export default function Carrousel(props) {
    //le hook useState contient l'index de l'image actuellement affichée
    const [activeIndex, setActiveIndex] = useState(0);
    const images = props.listeImages;

    //On définit les fonctions qui s'occupent de changer le state pour changer les images. Les fonctions 
    //handlePrevClick et handleNextClick sont appelées quand on clique sur les flèches. 
    //La fonction anonyme setActiveIndex prend prevState en argument et calcule la nouvelle valeur de activeIndex.
    const handlePrevClick = () => {
        setActiveIndex(prevState => prevState > 0 ? prevState - 1 : images.length - 1);
    };
    const handleNextClick = () => {
        setActiveIndex(prevState => prevState < images.length - 1 ? prevState + 1 : 0);
    };

    return (
        <div className="carrousel">
            <div className="carrousel-inner">
                {images.map((image, index) => (
                    <div key={index} className={`carrousel-item ${index === activeIndex ? 'active' : ''}`} >
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>)
                )}
            </div>

            {/*Si il y a plus d'une image, on affiche les indicateurs. */
                images.length > 1 && (
                    <>
                        <img src={flecheGauche} className="carrousel-control-prev" onClick={handlePrevClick} alt="fleche gauche" />
                        <img src={flecheDroite} className="carrousel-control-next" onClick={handleNextClick} alt="fleche droite" />
                        <span className="carrousel-indicators">{activeIndex + 1}/{images.length}</span>
                    </>
                )}
        </div>
    );
};  
