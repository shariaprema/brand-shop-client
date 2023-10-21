
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
import DisplayAllProducts from "../pages/DisplayAllProducts/DisplayAllProducts";
  
  
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
        path: "/allProducts",
        element: <DisplayAllProducts></DisplayAllProducts>,
        loader:()=>fetch(`http://localhost:5001/products`)
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
  