import Vignette from "../../components/Vignette/Vignette"
import image from "../../assets/ImageSource1.png"
// J'importe les données des logements à partir du json.
import donneeLogement from "../../donnees/logements.json"


export default function Home() {
  return (
    <div className="body-home">

      <div className='image-banner'>
        <img src={image} alt="" />
        <span> Chez vous, partout et ailleurs</span>
      </div>

      <div className="galerie">
        {/* J'utilise la fonction map pour remplir chaque vignette.*/}
        {donneeLogement.map(
          (elementLogement, key) => {
            return <Vignette
              ficheId={elementLogement.id}
              imageSrc={elementLogement.cover}
              titreVignette={elementLogement.title}
              key={key}
            />
          })
        }
      </div>

    </div>
  )
}



