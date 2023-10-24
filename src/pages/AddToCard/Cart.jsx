import { useLoaderData } from "react-router-dom";
import { useState } from 'react';
import { RiDeleteBin2Line } from 'react-icons/Ri';
import Swal from 'sweetalert2'

const Cart = () => {
    const loadedCarts = useLoaderData()

    const [products, setProducts] = useState(loadedCarts);


    const handleDelete = id =>{
        fetch(`http://localhost:5001/cart/${id}`, {
            method: "DELETE",
            })
            .then((res) => res.json())
            .then((data) => {
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "Are you want to remove this product?!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                      }).then((result) => {
                        if (result.isConfirmed) {
                          Swal.fire(
                            'Deleted!',
                            'Your product has been deleted.',
                            'success'
                          )
                        }
                      })

                const remainingProducts = products.filter(product=>product._id !== id)
                setProducts(remainingProducts)
                }
            });

            }


    return (
        <div>

         <div>
            <div className="mx-auto text-center pt-10">
            <h2 className="text-4xl font-bold">My <span className="text-amber-400">Cart</span></h2>
            </div>
           
            <hr className="w-1/3 shadow-yellow-400 mx-auto mt-2 mb-4"/>
        </div>

        <div className=" mx-auto">
            {
               products.map((cart) => (<div key={cart._id}>
              
               <div className="py-10  mx-auto">
               <table className="w-3/4 text-sm text-left text-gray-500 dark:text-gray-400 mx-auto">
                   <thead className="text-xs font-medium text-black uppercase bg-yellow-300 dark:bg-yellow-700 dark:text-gray-400">
                       <tr>
                           <th scope="col" className="px-4 py-3">
                            Product
                               
                           </th>
                           <th scope="col" className="px-4 py-3">
                            Brand
                               
                           </th>
                          
                           <th scope="col" className="px-4 py-3">
                            Product Name
                           </th>
                           <th scope="col" className="px-4 py-3">
                           Email
                           </th>
                           <th scope="col" className="px-4 py-3">
                           Price
                           </th>
                           <th scope="col" className="px-4 py-3">
                               Remove
                           </th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600 ">
                           <td className="w-60 p-4">
                               <img src={cart.image} alt="Apple Watch"/>
                           </td>
                           <td className="px-4 py-4 text-sm font-semibold text-gray-900 dark:text-white">
                              {cart.name}
                           </td>
                           <td className="px-4 py-4 font-semibold text-gray-900 dark:text-white">
                              {cart.brandName}
                           </td>
                         
                           <td className="px-4 py-4 font-semibold text-gray-900 dark:text-white">
                              {cart.email}
                           </td>
                        
                           <td className="px-4 py-4 font-semibold text-gray-900 dark:text-white">
                           {cart.price}Tk
                           </td>
                           <td className="px-4 py-4">
                           <button onClick={()=>handleDelete(cart._id)} className="btn btn-square bg-yellow-400 ">
                           <RiDeleteBin2Line className='w-6 h-6'/>
                           </button>
                              
                           </td>
                       </tr>
           
           
                   </tbody>
               </table>
               </div>

               </div>)
           ) 
            }
        </div>
            
        </div>
    );
};

export default Cart;
