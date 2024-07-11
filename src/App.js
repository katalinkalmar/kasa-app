import { Routes, Route } from "react-router-dom";

//ajout des pages
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import ErrorPage from "./pages/ErrorPage";

//ajout des composants

import Banner from "./components/Banner";
import Footer from "./components/Footer";


function App() {
	return (
		<div className="App">
			<Banner />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Apropos" element={<Apropos />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;