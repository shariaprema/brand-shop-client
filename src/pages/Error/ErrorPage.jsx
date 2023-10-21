import error from "../../assets/brand/error/404 Error-cuate.png"

const ErrorPage = () => {
    return (
        <div>
           <div className="">
           

           <div className="hero min-h-screen" >
           <img className="w-3/4 h-[800px]" src={error} alt="" />
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
            </div>

           </div>
            
        </div>
    );
};

export default ErrorPage;