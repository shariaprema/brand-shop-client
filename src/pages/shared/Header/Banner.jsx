// import bannerImg from '../../../assets/brand/slider-banner-4d.jpg'
import bannerImg from '../../../assets/brand/slider-banner-1.jpg'
const Banner = () => {
    return (
        <div>
            

<div className="hero relative bg-opacity-40" >
    <img src={bannerImg} className='hero-overlay bg-opacity-60' alt="" />
 
    <div className="hero-content text-left text-black ">
      
    <div className=" absolute left-10 max-w-xl p-6  dark:bg-gray-800 dark:border-gray-700">
    <p>Welcome to Pixel Tech - Where Tech Meets Lifestyle"</p>
    <a href="#">
        <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Connecting You to Tomorrow's Technology</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Pixel Tech Electronics is a cutting-edge technology company dedicated to bringing innovation to your fingertips. We offer a wide range of top-notch electronics, from smart gadgets to high-performance devices. With a commitment to quality, we empower your digital lifestyle, making every day smarter and more connected. Explore the future with Pixel Tech Electronics.</p>
    
    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Start Buying
        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>

  </div>
</div>
            
        </div>
    );
};

export default Banner;