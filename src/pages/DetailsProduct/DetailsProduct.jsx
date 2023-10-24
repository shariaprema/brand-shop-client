import { useLoaderData, useParams } from "react-router-dom";
import Rating from "react-rating";


const DetailsProduct = () => {
    const productsDetails = useLoaderData();
    console.log(productsDetails);
    const {id} = useParams()
    // const idInt = parseInt(_id)
    const details = productsDetails?.find(product => product._id == id);

    console.log(id,details);
    // console.log(name, ,image,brand,type,price,description,rating);

    return (
        <div className="">
                       
        <div>
            <div className="mx-auto text-center pt-10">
            <h2 className="text-4xl font-bold">Product <span className="text-amber-400">Details</span></h2>
            </div>
            <hr className="w-1/3  shadow-yellow-400 mx-auto mt-2" />
        </div> 

      <div className="flex justify-center mx-auto my-20">
            <div className="relative md:flex lg:flex w-full h-full  flex-row rounded-xl border border-y-yellow-400 border-x-yellow-400 bg-white bg-clip-border text-gray-700 shadow-xl">
                <div className=" relative lg:w-3/2 md:w-2/5 sm:w-3/4  sm:mx-auto m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                    <img
                    src={details.image}
                    alt="image"
                    className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-6">
                   
                    <h4 className="block mb-2 pb-2  text-4xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {details.name} 
                    </h4>
                    <div className="flex">
                    <Rating
      
                    initialRating={details.rating}
                    readonly
                    /> 

                   <h2 className="mb-6 pt-1 ml-3 text-sm">(12 Customer reviews)</h2>
                    </div>

                    <h6 className="block mb-2 text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                    Brand: {details.brandName}
                    </h6>
                    <h6 className="block mb-2 text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                    Type: {details.type}
                    </h6>

                    <h4 className="block mb-2 text-lg antialiased font-semibold leading-snug tracking-normal text-blue-600">
                    Price: {details.price} Tk
                    </h4>
                
                    <p className="block mb-4  text-base antialiased font-normal leading-relaxed text-gray-700">
                    {details.description}
                    Explore our wide selection of cutting-edge electronics products. From smartphones to laptops, headphones, and more, you'll find top brands and the latest technology. Get detailed product information, including specifications and customer reviews, to make informed buying decisions. Shop with confidence for all your electronic needs
                    </p>
                   
      
                    <a className="inline-block">
                    <button
                        className="flex items-center gap-1 px-3 py-3  text-xs font-bold text-center text-black uppercase align-middle transition-all rounded-lg select-none bg-yellow-400 active:bg-yellow-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        Add to Cart
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-4 h-4"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                        </svg>
                    </button>
                    </a>
                </div>
                </div>
           </div>

        </div>
    );
};

export default DetailsProduct;