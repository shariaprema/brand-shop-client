import { useEffect } from "react";
import { useState } from "react";
import Slider from "./Slider";

const ProductSlider = () => {


    const [sliders,setSliders] = useState([])
    console.log(sliders);

    useEffect(()=>{
        fetch('/slider.json')
        .then(res=>res.json())
        .then(data=>setSliders(data))
    },[])

    console.log(sliders);
    return (
        <div>
          <div>
            <div className="mx-auto text-center py-10">
            <h2 className="text-4xl font-bold">Our Latest <span className="text-amber-400">Collections</span></h2>
            <hr className="w-1/3  shadow-yellow-400 mx-auto mt-2"/>
            </div>
            
        </div>


         <div className=" mx-auto my-8">
                {
                    sliders.map(slider=><Slider key={slider.id} slider={slider}></Slider>)
                    
                }
         </div>
        </div>
    );
};

export default ProductSlider;