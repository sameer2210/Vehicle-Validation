import { FaHome } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { BiEdit } from "react-icons/bi";

import { Link } from "react-router-dom";


const Footer = ()=>{
    return(
        <>
       
        <div id="footer">        

        <p id="address"><FaLocationDot/> &nbsp;  8948+FP, Abbas Nagar, Gandhi Nagar, Bhopal, Madhya Pradesh 462036</p>
       
       <div id="footerIcons">
        <Link to="home"> <FaHome /> </Link>  
        <Link to="addvehicle"> <IoAddCircleOutline/>  </Link>  
        <Link to="display"> <MdOutlineSmartDisplay/> </Link>  
        <Link to="update"> <BiEdit/> </Link>  
         
        </div>
        
</div>

        </>
    )
}
export default Footer;