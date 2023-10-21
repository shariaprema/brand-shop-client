import { useLoaderData } from "react-router-dom";
import Navbar from "../shared/Header/Navbar";
import Products from "../../components/Products/Products";

const DisplayAllProducts = () => {
    const allProducts = useLoaderData()
    console.log(allProducts);
    return (
        <div>
            <Navbar></Navbar>

            <h2>All Products Here : {allProducts.length}</h2>
            <div className="grid grid-cols-4 gap-8 mx-auto">
            {
              allProducts.map(product=><Products key={product._id} product={product}></Products>)
               
            }
            </div>

        </div>
    );
};

export default DisplayAllProducts;