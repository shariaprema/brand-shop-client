
import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../layouts/Roots";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import Login from "../pages/Login/Login";
import Register from "../pages/Rehister/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/Error/ErrorPage";
import SingleBrands from "../components/SingleBrands/SingleBrands";
import DetailsProduct from "../pages/DetailsProduct/DetailsProduct";
import ProductSlider from "../components/AllBrands/ProductSlider";
import Cart from "../pages/AddToCard/Cart";

  
  
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
        element: <PrivateRoute>
          <AddProduct></AddProduct>
          </PrivateRoute>
      },
      {
        path: "/update",
        element: <h2></h2>,
        loader:()=>fetch(`http://localhost:5001/products`)
      },


    
      {
        path: "/products/:brand",
        element:<div>
          <ProductSlider></ProductSlider>
          <SingleBrands></SingleBrands>
        </div>,
        loader:({params})=>
       { console.log(params)
        return fetch(`http://localhost:5001/products/${params.brand}`)}
      },


      {
        path: "/details/:id",
        element:<DetailsProduct></DetailsProduct>,
        loader:()=> fetch('http://localhost:5001/products')
      },
      
      {
        path: "/cart",
        element:<Cart></Cart>,
       loader:()=> fetch('http://localhost:5001/cart')
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
  