import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Header/Navbar";

const Roots = () => {
    return (
        <div>
            
            <div className="max-w-7xl mx-auto font-poppins ">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
           
        </div>
    );
};

export default Roots;