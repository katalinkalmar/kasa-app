import logoEtoileActive from "../../assets/etoile-active.svg"
import logoEtoileInactive from "../../assets/etoile-inactive.svg"

export default function Rate(props) {
    const repereNotes = [1, 2, 3, 4, 5];
    return (
        <div className="notation-box">
            {repereNotes.map((note) =>
                props.note >= note ? (
                    <img
                        src={logoEtoileActive}
                        alt="etoile-remplie"
                    />
                ) : (
                    <img
                        src={logoEtoileInactive}
                        alt="etoile-vide"
                    />
                )
            )}
        </div>
    );
}