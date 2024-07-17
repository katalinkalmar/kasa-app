import React from 'react';
import Vignette from "../../components/Vignette/Vignette"
import image from "../../assets/img_home.png"
import "./Home.scss"
import donneeLogement from "../../donnees/logements.json"


export default function Home() {
  return (
    <div className="body-home">
      <img src={image} />
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



