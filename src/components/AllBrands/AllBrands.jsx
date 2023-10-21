import { useLoaderData } from "react-router-dom";
import Brand from "./Brand";

const AllBrands = () => {
    const allBrands = useLoaderData()
    console.log(allBrands);
    return (
        <div>
        <div className="mx-auto text-center py-10">
        <h2 className="text-4xl font-bold"> Our Brand Collections</h2>
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