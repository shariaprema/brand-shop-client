import { Link } from "react-router-dom";
import error from "../../assets/brand/error/404 Error-cuate.png"

const ErrorPage = () => {
    return (
        <div>
           <div className="">
           <div className="hero min-h-screen bg-black" >
           <img className="w-3/4 h-[600px]" src={error} alt="" />
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                
               <Link to={'/'}> <button className="btn text-base font-bold bg-yellow-400">Go Back Home</button></Link>
                </div>
            </div>
            </div>

           </div>
            
        </div>
    );
};

export default ErrorPage;