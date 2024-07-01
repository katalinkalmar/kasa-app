import React from 'react';
import Banner from "../../components/Banner"
import { Link } from "react-router-dom"


function App() {
  return <React.Fragment>
    <Banner />
    <Link to="/Apropos">En savoir plus</Link>
  </React.Fragment>


}

export default App;

