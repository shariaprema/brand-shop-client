// import bannerImg from '../../../assets/brand/slider-banner-4d.jpg'
import bannerImg from '../../../assets/brand/slider-banner-1.jpg'
const Banner = () => {
    return (
        <div>
            

<div className="hero " >
    <img src={bannerImg} className='hero-overlay opacity-50' alt="" />
 
    <div className="hero-content text-center text-black text-ellipsis overflow-hidden container">
      
    <div className="inline-block md:w-2/4  text-sm left-10 font-bold  p-6  dark:bg-gray-800 dark:border-gray-700">
    <p className='text-yellow-600 px-10 text-base'>"Welcome to Pixel Tech - Where Tech Meets Lifestyle"</p>
    <a href="#">
        <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white ">Connecting You to Tomorrow's Technology</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Pixel Tech Electronics is a cutting-edge technology company dedicated to bringing innovation to your fingertips. We offer a wide range of top-notch electronics Explore the future with Pixel Tech Electronics.</p>
    
    <a href="#" className="inline-flex items-center px-3 py-2 text-sm text-center font-semibold  text-black bg-yellow-400 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
        Start Buying
       
    </a>
</div>

  </div>
</div>
            
        </div>
    );
};

export default Banner;