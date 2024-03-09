import About from "../components/About";
import Deployement from "../components/DeployementActivity";
import OurMainRoad from "../components/OurMainRoad";
import Token from "../components/Token";
import Banner from "../components/Banner";
const landing = () => {
    return <div>
        <Banner />
        <About />
        <Deployement />
        <OurMainRoad />
        <Token />
    </div>
}

export default landing;