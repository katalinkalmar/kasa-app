import { useState } from 'react';

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
                        <button className="carrousel-control-prev" onClick={handlePrevClick}>Précédent</button>
                        <button className="carrousel-control-next" onClick={handleNextClick}>Suivant</button>
                        <span className="carrousel-indicators">{activeIndex}/{images.length - 1}</span>
                    </>
                )
            }

        </div>
    );
};  
