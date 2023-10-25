import { CiDeliveryTruck } from 'react-icons/Ci';
import { MdOutlineSupportAgent } from 'react-icons/Md';
import { FaMoneyCheckAlt } from 'react-icons/Fa';
import { CiDiscount1 } from 'react-icons/Ci';
const OurSupport = () => {
    return (
        <div className="mx-auto flex justify-center items-center">

            <div className="grid md:grid-cols-2 lg:grid-cols-4 mx-auto items-center gap-8 pt-12">
                
            <div className="w-[300px] h-[140px] hover:bg-yellow-300  p-6 flex gap-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              
            <div>
          
            <CiDeliveryTruck className='w-7 h-7'/>
            </div>

            <div>
            <a href="#">
                    <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Free delivery</h5>
                </a>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Free Shipping for orders over 60%</p>
               
            </div>



           
            
            
            </div>

            <div className="w-[300px] h-[140px] hover:bg-yellow-300  p-6 flex gap-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              
            <div>
              <MdOutlineSupportAgent className='w-7 h-7'/>
            </div>

            <div>
            <a href="#">
                    <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Online Support 24/7</h5>
                </a>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Support online 24 hours a day</p>
               
            </div>



           
            
            
            </div>

            <div className="w-[300px] h-[140px] hover:bg-yellow-300   p-6 flex gap-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              
            <div>
            <FaMoneyCheckAlt className='w-7 h-7' />
            </div>

            <div>
            <a href="#">
                    <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Money Return</h5>
                </a>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Back guarantee under 7 days</p>
               
            </div>



            </div>

            <div className="w-[300px] h-[140px] hover:bg-yellow-300   p-4 flex gap-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              
            <div>
           <CiDiscount1 className='w-7 h-7'/>
            </div>

            <div>
            <a href="#">
                    <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Member Discount</h5>
                </a>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Every order over 10,000 tk</p>
               
            </div>



           
            
            
            </div>


            </div>

            
        </div>
    );
};

export default OurSupport;