import { NavLink } from "react-router-dom";
import logo from '../../../assets/brand/logo.png'

const Navbar = () => {
    const navBarLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addProduct">Add Product</NavLink></li>
        <li><NavLink to="/cart">My Cart</NavLink></li>
    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
    <li><NavLink to="/login">login</NavLink></li>

    </>

    return (
        <div>
            <div className="navbar text-black font-semibold bg-yellow-400 sticky inset-0 z-10 h-max w-full max-w-full rounded-none border border-white/80 bg-opacity-80 py-2 px-4 shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navBarLinks} 
                    </ul>
                </div>

                    <div className="flex">
                    <div>
                        <img src={logo} className="w-16 h-16" alt="" />
                    </div>

                    <a
                    href="#"
                    className="mr-4 block font-serif cursor-pointer py-1.5 pt-4 font-bold text-xl leading-rela\v]v ]]]xed text-inherit antialiased">
                    Pixel Tech
                    </a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navBarLinks}
                </ul>
            </div>
            <div className="navbar-end">
             
                <button
                className="middle none center  rounded-lg bg-gradient-to-tr from-cyan-300 to-pink-400 py-2 px-4  text-sm font-bold  text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none md:inline-block lg:inline-block"
                type="button"
                data-ripple-light="true"
                >
                <span>Login</span>
                </button>

                
           
            </div>
        </div>
        </div>
       
    );
};

export default Navbar;