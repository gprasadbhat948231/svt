import Home from "../Components/home";
import Aboutus from "../Pages/aboutus";
import Contactus from "../Pages/contactus";
import {Routes,Route} from "react-router-dom"
import Login from "../Pages/login";
import Poojas from "../Pages/Poojas";
function Allroutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Poojas" element={<Poojas/>}></Route>
            <Route path="/about" element={<Aboutus/>}></Route>
            <Route path="/contact" element={<Contactus/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
    )
}
export default Allroutes;