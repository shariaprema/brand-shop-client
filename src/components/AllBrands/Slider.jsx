

const Slider = ({slider}) => {

    const {image_1,image_2,image_3,image_4,image_5,image_6,image_7,image_8,image_9,image_10} = slider || {}



    return (
        <div>
            

           <div className="flex mx-auto justify-center">

            <div className="carousel w-3/4 mx-auto h-[500px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={image_1} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide10" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
                <img src={image_2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src={image_3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
                <img src={image_4} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide5" className="carousel-item relative w-full">
                <img src={image_5} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide6" className="carousel-item relative w-full">
                <img src={image_6} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide5" className="btn btn-circle">❮</a> 
                <a href="#slide7" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide7" className="carousel-item relative w-full">
                <img src={image_7} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide6" className="btn btn-circle">❮</a> 
                <a href="#slide8" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide8" className="carousel-item relative w-full">
                <img src={image_8} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide7" className="btn btn-circle">❮</a> 
                <a href="#slide9" className="btn btn-circle">❯</a>
                </div>
            </div>




            <div id="slide9" className="carousel-item relative w-full">
                <img src={image_9} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide8" className="btn btn-circle">❮</a> 
                <a href="#slide10" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide10" className="carousel-item relative w-full">
                <img src={image_10} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide9" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> 
            
            </div>

         </div> 
  
</div>
         


 
    );
};

export default Slider;

