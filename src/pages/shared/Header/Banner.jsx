// import bannerImg from '../../../assets/brand/slider-banner-4d.jpg'
import bannerImg from '../../../assets/brand/slider-banner-1.jpg'
const Banner = () => {
    return (
        <div>

<div className="hero" >
    <img src={bannerImg} className='hero-overlay bg-opacity-30' alt="" />
 
    <div className="hero-content text-left text-black ">
      <div className="lg:max-w-2xl md:max-w-md max-w-sm"data-aos="flip-left">
        <h1 className="mb-5 lg:text-5xl text-3xl flex text-left font-bold">Enhance Your</h1>
        <h2>Entertainment</h2>
        <p className="mb-5"></p>
      <div>
      <form>   
          <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
              </div>
              <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#6fd18c] focus:border-[#57d37c] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#61d383] dark:focus:border-[#66c783]" placeholder="Search..." required/>
              <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-[#4fbf70] hover:bg-[#4fbf70] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#53c074] dark:hover:bg-[#34a756] dark:focus:ring-[#4fbf70]">Search</button>
          </div>
      </form>
      </div>
    

    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;