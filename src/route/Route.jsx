
import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../layouts/Roots";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import Login from "../pages/Login/Login";
import Register from "../pages/Rehister/Register";
import ErrorPage from "../pages/Error/ErrorPage";
import SingleBrands from "../components/SingleBrands/SingleBrands";
import DetailsProduct from "../pages/DetailsProduct/DetailsProduct";
import ProductSlider from "../components/AllBrands/ProductSlider";
import Cart from "../pages/AddToCard/Cart";
import Update from "../components/Update/Update";
import PrivateRoute from "./PrivateRoute";

  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch(`http://localhost:5001/brands`)
      },
     
      {
        path: "/addProduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },

 
      {
        path: "/product/:brand/slider/:id",
        element:<div>
         <PrivateRoute> 
          <ProductSlider></ProductSlider>
          <SingleBrands></SingleBrands>
          </PrivateRoute>
        </div>,
        loader:({params})=>
       { console.log(params)
        return fetch(`http://localhost:5001/products/${params.brand}`)}
      },


      {
        path: "/details/:id",
        element:<PrivateRoute><DetailsProduct></DetailsProduct></PrivateRoute>,
        loader:()=> fetch('http://localhost:5001/products')
      },
      
      {
        path: "/cart",
        element:<PrivateRoute><Cart></Cart></PrivateRoute>,
       loader:()=> fetch('http://localhost:5001/cart')
      },
      {
        path: "/update/:id",
        element:<PrivateRoute><Update></Update></PrivateRoute>,
       loader:({params})=> fetch(`http://localhost:5001/users/${params.id}`)
      },




    


  

      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ],
    },
  ]);

  export default router; 
  