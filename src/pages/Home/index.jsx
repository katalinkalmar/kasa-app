import React from 'react';
import Vignette from "../../components/Vignette/Vignette"
import image from "../../assets/ImageSource1.png"
import donneeLogement from "../../donnees/logements.json"


export default function Home() {
  return (
    <div className="body-home">
      <div className='image-banner'>
        <img src={image} alt="" />
        <span> Chez vous, partout et ailleurs</span>
      </div>
      

      <div className="galerie">
        {
          donneeLogement.map(
            (elementLogement) => {
              return <Vignette
                ficheId={elementLogement.id}
                imageSrc={elementLogement.cover}
                titreVignette={elementLogement.title}
              />
            }
          )
        }
      </div>

    </div>
  )
}



