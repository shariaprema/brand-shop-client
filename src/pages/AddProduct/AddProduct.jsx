import Navbar from "../shared/Header/Navbar";

const AddProduct = () => {

    const handleAddProduct = e =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const image = form.img.value
        const brand = form.brand.value
        const type = form.type.value
        const price = form.price.value
        const description = form.description.value
        const rating = form.rating.value

        console.log(name,image,brand,type,price,description,rating);

        const productData = {
            name,
            image,
            brand,
            type,
            price,
            description,
            rating
        }

        fetch("http://localhost:5001/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });
        
      };



    





    return (
        <div>
            <Navbar></Navbar>
            
            <div>
            <div>
                <h2 className="text-2xl font-semibold py-6 text-center">Add Your Product</h2>
                
            </div>

            <div className="mb-20">
                
            <form onSubmit={handleAddProduct}>
            <div className="mb-6">
                
                <label className="block mb-2 ml-1 text-base font-semibold text-gray-900 dark:text-white">Product Name
                </label>
                <input type="text"  name="name" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Name" required></input>
            </div>
            <div className="mb-6">
                
                <label className="block mb-2 ml-1 text-base font-semibold text-gray-900 dark:text-white">Image
                </label>
                <input type="text" name="img" className="rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Image" required></input>
            </div>
            <div className="mb-6">
                
                <label className="block mb-2 text-base font-semibold text-gray-900 dark:text-white">Brand Name</label>
                <select name="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Apple</option>
                <option>SONY</option>
                <option>Samsung</option>
                <option>HP</option>
                <option>Lg</option>
                <option>ASUS</option>
                </select>
                </div>

            <div className="mb-6">
                 
                <label className="block mb-2 text-base font-semibold text-gray-900 dark:text-white">Product Type</label>
                <select name="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Phone</option>
                <option>Smart Watch</option>
                <option>Head Phone</option>
                <option>Computer</option>
                <option>TV</option>
                <option>Laptop</option>
                <option>iPad</option>
                <option>Fridge</option>
                <option>AC</option>
                <option>Washing Machine</option>

                </select>

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
                <label className="block mb-2 text-base font-semibold text-gray-900 dark:text-white">Product Type</label>
                <select name="rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select>
            </div>
          
          
            <button type="submit" className="text-white flex justify-center items-center mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

            </div>
            </div>
            
        </div>
    );
};

export default AddProduct;



