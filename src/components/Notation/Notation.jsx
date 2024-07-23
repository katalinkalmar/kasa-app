import logoEtoileActive from "../../assets/etoile-active.svg"
import logoEtoileInactive from "../../assets/etoile-inactive.svg"
//Pour chaque étoile, on regarde si le num d'étoile est supérieur à la note
// On décide alors d'afficher soit une étoile remplie soit une vide.
//L'objet props, paramètre de la fonction Rate contient la propriété note. Ce sont des données
// qui sont passées au composant Rate par son composant parent: Notation.

export default function Rate(props) {
    const repereNotes = [1, 2, 3, 4, 5];
    return (
        <div className="notation-box">
            {repereNotes.map((note, key) =>
                props.note >= note ? (
                    <img
                        src={logoEtoileActive}
                        alt="etoile-remplie"
                        key={key}
                    />
                ) : (
                    <img
                        src={logoEtoileInactive}
                        alt="etoile-vide"
                        key={key}
                    />
                )
            )}
        </div>
    );
}