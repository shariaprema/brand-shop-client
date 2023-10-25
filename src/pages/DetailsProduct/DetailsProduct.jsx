import { useLoaderData, useParams } from "react-router-dom";
import Rating from "react-rating";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'


const DetailsProduct = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    const productsDetails = useLoaderData();
    const {id} = useParams()
    // const idInt = parseInt(_id)
    const details = productsDetails?.find(product => product._id == id);

    const {_id , name, image, brandName, type, price, description, rating} = details
    const {email} = user;

    const handleAddToCart = (e)=>{
        e.preventDefault()
        const addToCart = {
            email,
            id,
            name,
            image,
            brandName,
            type, 
            price, 
            description,
            rating
            }

            fetch("https://brand-shop-server-15bdchsks-sharia-siddiquee-premas-projects.vercel.app/cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(addToCart),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Add To Cart Successfully!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })

            }
        });
        
      
    }

    return (
        <div className="">
                       
        <div>
            <div className="mx-auto text-center pt-10">
            <h2 className="text-4xl font-bold">Product <span className="text-amber-400">Details</span></h2>
            </div>
            <hr className="w-1/3  shadow-yellow-400 mx-auto mt-2" />
        </div> 

      <div className="flex justify-center mx-auto my-20">
            <div className="relative md:flex lg:flex w-full h-full md:h-1/3  flex-row rounded-xl border border-y-yellow-400 border-x-yellow-400 bg-white bg-clip-border text-gray-700 shadow-xl">
                <div className=" relative  md:w-1/3  sm:mx-auto m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                    <img
                    src={image}
                    alt="image"
                    className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-6">
                   
                    <h4 className="block mb-2 pb-2  text-4xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {name} 
                    </h4>
                    <div className="flex">
                    <Rating
      
                    initialRating={rating}
                    readonly
                    /> 

                   <h2 className="mb-6 pt-1 ml-3 text-sm">(12 Customer reviews)</h2>
                    </div>

                    <h6 className="block mb-2 text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                    Brand: {brandName}
                    </h6>
                    <h6 className="block mb-2 text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                    Type: {type}
                    </h6>

                    <h4 className="block mb-2 text-lg antialiased font-semibold leading-snug tracking-normal text-blue-600">
                    Price: {price} Tk
                    </h4>
                
                    <p className="block mb-4  text-base antialiased font-normal leading-relaxed text-gray-700">
                    {description}
                    Explore our wide selection of cutting-edge electronics products. From smartphones to laptops, headphones, and more, you'll find top brands and the latest technology. Get detailed product information, including specifications and customer reviews, to make informed buying decisions. Shop with confidence for all your electronic needs
                    </p>
                   
      
                    <a className="inline-block">
                    <button  onClick={handleAddToCart}
                        className="flex items-center gap-1 px-3 py-3  text-xs font-bold text-center text-black uppercase align-middle transition-all rounded-lg select-none bg-yellow-400 active:bg-yellow-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none dark:focus:ring-yellow-800 hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85]  dark:hover:bg-yellow-700 focus:ring-yellow-300  "
                        type="submit"
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