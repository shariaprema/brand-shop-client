import { Link } from "react-router-dom";

const Brand = ({brandItems}) => {
    const {id,brand_img,brand}= brandItems || {}
    return (
        <Link  to={`/product/${brand}/slider/${id}`}>

            <div >
            <div className=" flex py-4 bg-transparent flex-col dark:text-red-600 dark:bg-red-700 hover:text-white bg-blue-400 hover:bg-neutral-700  text-gray-700  shadow-md rounded-xl bg-clip-border">
            
                <div className=" mx-auto p-0 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg rounded-xl bg-clip-border">
                    <img className="w-[250px] h-[250px]" src={brand_img} alt="picture" />
                </div>
                <div className="pt-6 px-6  text-center">
                    <h4 className="  block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                   {brand}
                    </h4>
                   
                </div>
                
             
                </div>
            </div>

            

            
        </Link>
    );
};

export default Brand;