
const Brand = ({brandItems}) => {
    const {brand_img,brand}= brandItems || {}
    return (
        <div>

            <div className="">
            <div className=" flex py-4 bg-transparent flex-col hover:text-white bg-yellow-200 hover:bg-neutral-700  text-gray-700  shadow-md rounded-xl bg-clip-border">
            
                <div className=" mx-auto p-0 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg rounded-xl bg-clip-border">
                    <img className="w-[250px] h-[250px]" src={brand_img} alt="picture" />
                    {/* <div className="absolute inset-0 w-full h-full to-bg-black-10 hover:bg-gradient-to-t from-black/20 via-black/20"></div> */}
                </div>
                <div className="pt-6 px-6  text-center">
                    <h4 className="  block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                   {brand}
                    </h4>
                   
                </div>
             
                </div>
            </div>

            

            
        </div>
    );
};

export default Brand;