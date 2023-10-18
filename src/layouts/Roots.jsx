import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";

const Roots = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto font-poppins bg-blue-400">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
           
        </div>
    );
};

export default Roots;