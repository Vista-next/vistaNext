import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Deployement from "./components/DeployementActivity";
import OurMainRoad from "./components/OurMainRoad";
import Landing from "./page/landing";
import Team from './components/Team'
import Token from './components/Token'
import './Navigation.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TermsOfUse from './page/termsOfUse';

const App = () => {
    return (
        <div>
            <Header />
            <main className="">
                <Routes>
                    <Route element={<Landing />} path="/" />
                    <Route element={<TermsOfUse />} path='/terms' />
                </Routes>

            </main>
            <Contact />
            <Footer />
        </div>
    )
}

export default App;