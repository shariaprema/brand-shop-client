import { useLoaderData } from "react-router-dom";
import Products from "../Products/Products";

const SingleBrands = () => {
    const singleProduct = useLoaderData()
   
    if (singleProduct.length === 0) {

          return <div>
             <div className="flex h-screen text-center justify-center mx-auto mt-20">
                <div>
                <h2 className="text-2xl text-red-600"> Currently Out of Stock !!!</h2>
                </div>
           
            </div>;
          
          </div>
        }


    return (

        <div>

        <div>
            <div className="mx-auto text-center py-16">
            <h2 className="text-4xl font-bold">Product <span className="text-amber-400">Collections</span></h2>
            <hr className="w-1/3  shadow-yellow-400 mx-auto mt-2"/>
        </div>
            
        </div>
        <div>
        <h2>
      
        </h2>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-10  gap-10" >
         {
             singleProduct.map(product=><Products key={product._id} product={product}></Products>)
         }
          </div>
            
        </div>
    );
};

export default SingleBrands;