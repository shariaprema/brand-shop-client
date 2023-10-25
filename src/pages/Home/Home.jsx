import AllBrands from "../../components/AllBrands/AllBrands";
import LeadershipTeam from "../../components/LeadershipTeam/LeadershipTeam";
import OurSupport from "../../components/OurSupport/OurSupport";
import Banner from "../shared/Header/Banner";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <OurSupport></OurSupport>
           <AllBrands></AllBrands>
          
           <LeadershipTeam></LeadershipTeam>
        </div>
    );
};

export default Home;