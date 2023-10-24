import { useLoaderData } from "react-router-dom";
import Brand from "./Brand";

const AllBrands = () => {
     



    const allBrands = useLoaderData()
    return (
        <div>
         <div>
            <div className="mx-auto text-center py-20">
            <h2 className="text-4xl font-bold">Our Brand <span className="text-amber-400">Collections</span></h2>
            <hr className="w-1/3  shadow-yellow-400 mx-auto mt-2"/>
            </div>
            
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto ">
            {
                allBrands.map(brandItems => <Brand key={brandItems._id} brandItems={brandItems}></Brand>)
            }
        </div>
        </div>
    );
};

export default AllBrands;