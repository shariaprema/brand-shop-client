import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import Navbar from "../shared/Header/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Login = () => {

const {googleSignIn, logInUser} = useContext(AuthContext);

const location = useLocation();
const navigate = useNavigate();
 
const handleLogin = (e)=>{
    console.log(e);
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email =form.get('email')
        const password =form.get('password')
        console.log(email,password);


    //validation
    if(password.length < 6){
        toast.error('Password must have at least 6 characters')
        return;
    }


    logInUser(email, password)
    .then((result) => {
        console.log(result.user);
        toast.success('User logged in successfully')        
        navigate(location?.state? location.state : '/')
        e.target.reset();       
    
    })
    .catch((error) => {
       toast.error(error.message)
    });




    
}


const handleGoogleLogin =()=>{
    googleSignIn()
    .then((result) => {
        console.log(result.user);
        toast.success('User logged in successfully')        

      }).catch((error) => {
       toast.error(error.message)
        
      });
}





    return (
        <div>
            
            
            <div className="min-h-screen">


            <div>
                <div className="mx-auto text-center pt-10">
                <h2 className="text-4xl font-bold">Please <span className="text-amber-400">Login</span></h2>
                <hr className="w-1/3  shadow-yellow-400 mx-auto mt-2" />
                 </div>
            </div>
            <form  onSubmit={handleLogin}  className="card-body lg:w-1/2 md:w-3/4 mx-auto  rounded-lg ">
    
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button type="submit" className="btn bg-yellow-400 border-x-yellow-500 border-y-yellow-500  hover:bg-yellow-500 rounded-full">Login</button>
                </div>

                <p className="text-sm text-center mt-4">Don`t have an account <Link to="/register" className="text-blue-600 font-bold">Register</Link></p>
                <Link to='/'>
                <div  className="flex justify-center items-center ">
                <button onClick={handleGoogleLogin}
                    type="button" className=" border border-x-yellow-400 border-y-yellow-400  bg-white  text-black hover:bg-yellow-400/90 focus:ring-4 focus:outline-none focus:ring-yellow-400/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-yellow-500/55 mr-2 mb-2">
                     <FcGoogle className="w-6 h-6 mr-1"/>
                
                Sign in with Google
                </button>
                
                </div>


                </Link>
            </form>
            
        </div>

             
        <Toaster
         position="top-right"
         reverseOrder={false} />  
            
        </div>
    );
};

export default Login;