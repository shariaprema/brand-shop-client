import AllBrands from "../../components/AllBrands/AllBrands";
import Banner from "../shared/Header/Banner";
import Navbar from "../shared/Header/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
           <AllBrands></AllBrands>
        </div>
    );
};

export default Home;