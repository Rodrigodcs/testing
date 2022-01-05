import {GlobalStyle} from "./GlobalStyle"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Header from "./components/Header.js"
import AboutUs from "./pages/AboutUs"
import Landing from "./pages/Landing"
import Contact from "./pages/Contact"
import PickUp from "./pages/PickUp"
import Documents from "./pages/Documents"
import Track from "./pages/Track"

export default function App(){

    return (
        <Router>
            <GlobalStyle/>
            <Header/>
            <Routes>
                <Route exact path='/' element={<Landing />} />
                <Route exact path='/sobre' element={<AboutUs />} />
                <Route exact path='/coletas' element={<PickUp />} />
                <Route exact path='/documentos' element={<Documents />} />
                <Route exact path='/contato' element={<Contact />} />
                <Route exact path='/rastrear' element={<Track />} />
            </Routes>
        </Router>
    )
}
