import { useEffect } from "react";
import { useState } from "react";
import Slider from "./Slider";

const ProductSlider = () => {
    const [sliders,setSliders] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5001/brands')
        .then(res=>res.json())
        .then(data=>setSliders(data))
    },[])

    // console.log(sliders);
    return (
        <div>
         <h2>Slider here:{sliders.length}</h2>
         <div>
                {
                    sliders.map(slider=><Slider key={slider.id} slider={slider}></Slider>)
                    
                }
         </div>
        </div>
    );
};

export default ProductSlider;