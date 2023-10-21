import { Link, useNavigate } from "react-router-dom";
import Navbar from "../shared/Header/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';


const Register = () => {

    const {createUser, updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        
        const name =form.get('name')
        const img =form.get('img')
        const email =form.get('email')
        const password =form.get('password')
        console.log(name,img,email, password)

        //validation
        if(password.length < 6){
            toast.error('password should be at least 6 characters or more')
            return;
        }

        else if(!/[A-Z]/.test(password)){
            toast.error('Your password should have at least one upper case characters')
            return;
        }

        else if(!/[\W_]/g.test(password)){
            toast.error('Your password should have at least one special characters')
            return;
        }



        createUser(email,password)
        .then((res) => {
         console.log(res.user);
         updateUserProfile(img,name)
            .then(()=>{
                toast.success('User register successfully!') 
                navigate('/')

            })
          })
          .catch((error) => {
            toast.error(error.message)
          });

    }

    return (
        <div>
            <Navbar></Navbar>
            
            <div className="bg-base-200 min-h-screen">
            <h2 className="text-3xl text-center py-5">Please Register</h2>
            <form onSubmit={handleRegister} className="card-body lg:w-1/2 md:w-3/4 mx-auto bg-white rounded">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Your Name</span>
                </label>
                <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="Photo URL" name="img" className="input input-bordered"  />
                </div>
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
                <button type="submit" className="btn  border-x-yellow-500 border-y-yellow-500 bg-yellow-400  hover:bg-yellow-500 rounded-full">Register</button>
                </div>

                <p className="text-sm text-center mt-4"> You have an account <Link to="/login" className="text-blue-600 font-bold">Login</Link></p>

            </form>

        
        </div>
          <Toaster
          position="top-right"
          reverseOrder={false}/> 
        </div>
    );
};

export default Register;