import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
    return (
        <Box>
            <Box className="navigation_menu">
                <Box className="bell_div">
                    <Image className="bell_icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvy2MxJX0iWa-tor5Eo1DJtsUH24pcPc8phQ&usqp=CAU" alt="home_icon" />
                </Box>
                <Link to="/"><Text className="menus">🏠Home</Text></Link>
                <Link to="/poojas"><Text className="menus">Poojas</Text></Link>
                <Link to="/about"><Text className="menus">About Us</Text></Link>
                <Link to="/trustee"><Text className="menus">Trust</Text></Link>
                <Link to="/donation"><Text className="menus">Donation</Text></Link>
            </Box>
        </Box>
    )
}
export default Navbar;