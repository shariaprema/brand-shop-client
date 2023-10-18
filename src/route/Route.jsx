
import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../layouts/Roots";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
    //   errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>
      },
    ],
    },
  ]);

  export default router; 
  