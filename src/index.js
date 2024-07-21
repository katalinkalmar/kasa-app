import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// Chargement de l'application react:
import App from "./App";
// Chargement de tout le scss
import "./style/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);