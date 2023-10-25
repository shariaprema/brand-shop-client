import img1 from '../../assets/brand/LeaderShip/1.webp'
import img2 from '../../assets/brand/LeaderShip/3.webp'
import img3 from '../../assets/brand/LeaderShip/4.webp'
const LeadershipTeam = () => {
    return (
        <div>
            
            <div>
                <div className="mx-auto text-center py-20">
                <h2 className="text-4xl font-bold">Our Leadership<span className="text-amber-400"> Team</span></h2>
                <hr className="w-1/3  shadow-yellow-400 mx-auto mt-2" />
                </div>
            </div>
            

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mx-auto container mb-8">

            <div className="relative flex  flex-col rounded-xl  bg-clip-border bg-yellow-300  text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                    <img className="h-full" src={img1} alt="profile-picture" />
                </div>
                <div className="p-6 text-center">
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Kurt Canova

                    </h4>
                    <p className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-lg font-medium leading-relaxed text-transparent antialiased">
                    Founder
                    </p>

                    <p>Kurt Canova founded Tech Electronics in 1963 after attending University of Missouri – Rolla and Kansas City State University for Electrical Engineering. Jim continued his education by attending Washington University for Finance and Marketing.</p>
                    
                </div>
                
                </div>

           

            <div className="relative flex flex-col rounded-xl  bg-yellow-300 bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                    <img className="h-full" src={img2} alt="profile-picture" />
                </div>
                <div className="p-6 text-center">
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Stephanie Maniaci Michaels
                    </h4>
                   
                    <p className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-lg font-medium leading-relaxed text-transparent antialiased">
                    Executive Chairman
                    </p>
                    <p> Stephanie Maniaci Michaels holds a Bachelor’s Degree in Electrical Engineering with a minor in Business Management from the University of Dayton. She entered into the family business in 1990 as a technician and Service Manager and Director of Operations and Engineering.</p>
                </div>
             
                </div>

            <div className="relative flex flex-col rounded-xl bg-yellow-300 bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                    <img src={img3} alt="profile-picture" />
                </div>
                <div className="p-6 text-center">
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Sean Devereaux
                    </h4>
                    <p className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-lg font-medium leading-relaxed text-transparent antialiased">
                    Executive Director of Direct Sales
                    </p>
                    <p>Sean Devereaux entered the family business in 1987 as the voice systems manager. He is currently the Executive Director of Direct Sales. Laura is responsible for the growth and development of all the direct channel markets Tech Electronics serves.</p>
                </div>
                
                </div>

            </div>
            
        </div>
    );
};

export default LeadershipTeam;

