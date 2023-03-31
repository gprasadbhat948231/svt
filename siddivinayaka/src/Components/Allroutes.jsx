import {Routes,Route} from "react-router-dom"
import Home from "../Components/Home";
import Aboutus from "../Pages/Aboutus";
import Donation from "../Pages/Donation";
import Poojas from "../Pages/Poojas";
import Trustee from "../Pages/Trustee";
function Allroutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/pooja" element={<Poojas/>}></Route>
            <Route path="/about" element={<Aboutus/>}></Route>
            <Route path="/trustee" element={<Trustee/>}></Route>
            <Route path="/donation" element={<Donation/>}></Route>
        </Routes>
    )
}
export default Allroutes;