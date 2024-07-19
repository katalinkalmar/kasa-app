import { useState } from 'react';
import flecheGauche from "../../assets/arrow_back.svg"
import flecheDroite from "../../assets/arrow_forward.svg"

export default function Carrousel(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = props.listeImages;

    const handlePrevClick = () => {
        setActiveIndex(prevState => prevState > 0 ? prevState - 1 : images.length - 1);
    };
    const handleNextClick = () => {
        setActiveIndex(prevState => prevState < images.length - 1 ? prevState + 1 : 0);
    };

    return (
        <div className="carrousel">
            <div className="carrousel-inner">
                {
                    images.map((image, index) => (
                        <div key={index} className={`carrousel-item ${index === activeIndex ? 'active' : ''}`} >
                            <img src={image} alt={`Slide ${index + 1}`} />
                        </div>))
                }
            </div>
            {
                images.length > 1 && (
                    <>
                        <img src={flecheGauche} className="carrousel-control-prev" onClick={handlePrevClick}/>
                        <img src={flecheDroite} className="carrousel-control-next" onClick={handleNextClick}/>
                        <span className="carrousel-indicators">{activeIndex+1}/{images.length}</span>
                    </>
                )
            }

        </div>
    );
};  
