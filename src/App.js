import { Routes, Route } from "react-router-dom";

//ajout des pages
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import ErrorPage from "./pages/ErrorPage";
import FichesLogement from "./pages/FichesLogement";

//ajout des composants

import Banner from "./components/Banner/Banner.jsx";
import Footer from "./components/Footer/Footer.jsx";


function App() {
	return (
		<div className="App">
			<Banner />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Apropos" element={<Apropos />} />
					<Route path="*" element={<ErrorPage />} />
					<Route path="/fichelogement/:id" element={<FichesLogement />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;