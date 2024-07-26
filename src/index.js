//J'importe ReactDom qui permet de rendre les composants React 
//dans le DOM de l'application.
import ReactDOM from "react-dom/client";
// J'importe le composant BrowserRouter de la bibliotheque React Router DOM.
//BrowserRouter est un composant de routage,il utilise 
//les URL du navigateur pour gérer les changements de page.
import { BrowserRouter } from "react-router-dom";
// Chargement de l'application react:
import App from "./App";
// Chargement de tout le scss
import "./style/main.scss";

//Un noeud racine React est créé et associe l'élément HTML avec l'id root.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Voici le rendu du composant racine de l'appliction. 
//Il contient l'interface utilisateur de l'application.
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);