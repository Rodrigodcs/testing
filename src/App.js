import {GlobalStyle} from "./GlobalStyle"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Header from "./components/Header.js"
import AboutUs from "./pages/AboutUs"
import Landing from "./pages/Landing"
import Contact from "./pages/Contact"

export default function App(){

    return (
        <Router>
            <GlobalStyle/>
            <Header/>
            <Routes>
                <Route exact path='/' element={<Landing />} />
                <Route exact path='/about' element={<AboutUs />} />
                <Route exact path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    )
}
