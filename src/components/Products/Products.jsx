import Rating from "react-rating";
import { Link } from "react-router-dom";



const Products = ({product}) => {

    
    const {_id,name,image,brandName,type,price,description,rating} = product || {}

    
    return (
    <div>
            
  <div className="w-full mx-auto max-w-sm bg-blue-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className=" pb-4 rounded-t-lg w-[400px] h-[310px]" src={image} alt="product image" />
    </a>
    <div className="px-5 pb-5">
        

        <div className="flex item-center justify-between">
        <a href="#">
            <h5 className="text-xl mb-2 font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </a>
        <span className="text-lg font-medium text-blue-800 dark:text-white">Tk: {price}</span>

        </div>
        
        <div className="flex gap-1">
        <h5 className="text-medium font-semibold text-blue-800 tracking-tight dark:text-white">{brandName}</h5>
       
        
       <h5 className="text-medium font-semibold text-blue-800 tracking-tight dark:text-white">{type}</h5>
       
        </div>
        <div className="flex items-center mt-2.5 mb-5">
         <Rating
      
            initialRating={rating}
            readonly
            /> 

        </div>
        
        <div className="flex items-center gap-3"> 
           <Link to={`/details/${_id}`}>
           <button  className="text-white uppercase bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Details</button>
           </Link>

          <Link to={`/update/`}>
          <button  className="text-white uppercase bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Update</button>
          </Link>

          
        </div>

    </div>
</div>

            
        </div>
    );
};

export default Products;