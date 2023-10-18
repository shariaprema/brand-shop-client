import Navbar from "../shared/Header/Navbar";

const AddProduct = () => {
    return (
        <div>
            <Navbar></Navbar>-
            <div className="">
            <div>
                <h2 className="text-2xl font-semibold py-6 text-center">Add Your Product</h2>
                
            </div>

            <div className="mb-20">
                
            <form>
            <div className="mb-6">
                
                <label className="block mb-2 ml-1 text-base font-semibold text-gray-900 dark:text-white">Product Name
                </label>
                <input type="text"  name="name" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Name" required></input>
            </div>
            <div className="mb-6">
                
                <label className="block mb-2 ml-1 text-base font-semibold text-gray-900 dark:text-white">Image
                </label>
                <input type="text" name="image" className="rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Image" required></input>
            </div>
            <div className="mb-6">
                
                <label className="block mb-2 ml-1 text-base font-semibold text-gray-900 dark:text-white">Brand Name
                </label>
                <input type="text" name="brand" className="rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Brand Name" required></input>
            </div>
            <div className="mb-6">
                
                <label className="block mb-2 ml-1 text-base font-semibold text-gray-900 dark:text-white">Product Type
                </label>
                <input type="text" name="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Type" required></input>
            </div>
            <div className="mb-6">
                
                <label className="block mb-2 ml-1 text-base font-semibold text-gray-900 dark:text-white">Price
                </label>
                <input type="number"  name="price" className="bg-gray-50 border rounded-lg border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Price" required></input>
            </div>
            <div className="mb-6">
                
                <label className="block mb-2 ml-1 text-base font-semibold text-gray-900 dark:text-white">Short description
                </label>
                <input type="text"   name="description" className="rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Short Description" required>

                </input>
            </div>
            <div className="mb-6">
                <label className="block mb-2 ml-1 text-base font-semibold text-gray-900 dark:text-white">Rating
                </label>
                <input type="number" name="Rating" className="rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rating" required></input>
            </div>
          
          
            <button type="submit" className="text-white flex justify-center items-center mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

            </div>
            </div>
            
        </div>
    );
};

export default AddProduct;



