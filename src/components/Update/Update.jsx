import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const Update = () => {
    const singleProduct = useLoaderData()

const {name, image,brandName,type,price,rating} = singleProduct


    console.log(singleProduct);

    


    const handleUpdateProduct= e =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const image = form.img.value
        const brandName = form.brand.value
        const type = form.type.value
        const price = form.price.value
        const rating = form.rating.value

        const productData = {
            name,
            image,
            brandName,
            type,
            price,
            rating
        }

        fetch(`https://brand-shop-server-15bdchsks-sharia-siddiquee-premas-projects.vercel.app/users/${singleProduct._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      })
        .then((res) => res.json())
        .then((data) => {
            if(data.modifiedCount>0){
                Swal.fire(
                    'Good job!',
                    'Product Updated Successfully!',
                    'success'
                  )
            }
        });


    }

    return (
        <div>
            
        <div>

        <div>
            <div className="mx-auto text-center py-10">
            <h2 className="text-4xl font-bold">Update Your<span className="text-amber-400"> Product</span></h2>
            <hr className="w-1/3  shadow-yellow-400 mx-auto mt-2" />

        </div>
    </div>


        <div className="w-3/4 mx-auto ">
            
        <form onSubmit={handleUpdateProduct}>
        <div className="mb-6">
            
            <label className="block mb-2 ml-1 text-base font-semibold text-gray-900 dark:text-white">Product Name
            </label>
            <input type="text" defaultValue={name}  name="name" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Name" required></input>
        </div>
        <div className="mb-6">
            
            <label className="block mb-2 ml-1 text-base font-semibold text-gray-900 dark:text-white">Image
            </label>
            <input type="text" defaultValue={image} name="img" className="rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Image" required></input>
        </div>
        <div className="mb-6">
            
            <label className="block mb-2 text-base font-semibold text-gray-900 dark:text-white">Brand Name</label>
            <select name="brand" defaultValue={brandName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option></option>
            <option>Apple</option>
            <option>Samsung</option>
            <option>SONY</option>
            <option>HP</option>
            <option>LG</option>
            <option>ASUS</option>
            </select>
            </div>

        <div className="mb-6">
             
            <label className="block  mb-2 text-base font-semibold text-gray-900 dark:text-white">Product Type</label>
            <select name="type" defaultValue={type} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option></option>
            <option>Phone</option>
            <option>Smart Watch</option>
            <option>Head Phone</option>
            <option>Ear Phone</option>
            <option>Computer</option>
            <option>TV</option>
            <option>Laptop</option>
            <option>Tablet</option>
            <option>iPad</option>
            <option>KeyBoard</option>
            <option>Router</option>
            <option>Fridge</option>
            <option>AC</option>
            <option>Washing Machine</option>
            <option>Microwave oven</option>


            </select>

        </div>
        <div className="mb-6">
            
            <label className="block mb-2 ml-1 text-base font-semibold text-gray-900 dark:text-white">Price
            </label>
            <input type="number" defaultValue={price}  name="price" className="bg-gray-50 border rounded-lg border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Price" required></input>
        </div>
    
        <div className="mb-6">
            <label className="block mb-2 text-base font-semibold text-gray-900 dark:text-white"> Rating</label>
            <select name="rating" defaultValue={rating} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option></option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </select>
        </div>
      
      
        <button type="submit"  className=" mb-10 text-white flex justify-center items-center mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Product</button>
        </form>

        </div>
        </div>
        
    </div>
    );
};

export default Update;