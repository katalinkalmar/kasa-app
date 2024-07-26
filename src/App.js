//Ajout de Routes pour l'arborescence des routes.
//Ajout de Route pour définir une route individuelle.
import { Routes, Route } from "react-router-dom";

//ajout des pages
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import ErrorPage from "./pages/ErrorPage";
import FichesLogement from "./pages/FichesLogement";

//ajout des composants communs à toutes les pages.

import Banner from "./components/Banner/Banner.jsx";
import Footer from "./components/Footer/Footer.jsx";


function App() {
	return (
		<div className="App">
			<Banner />
			<main>
				<Routes>
					{/* Définition des différentes routes*/}
					<Route path="/" element={<Home />} />
					<Route path="/Apropos" element={<Apropos />} />
					<Route path="*" element={<ErrorPage />} />
					{/* Pour les fiches logement on passe l'id en paramètre*/}
					<Route path="/fichelogement/:id" element={<FichesLogement />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;