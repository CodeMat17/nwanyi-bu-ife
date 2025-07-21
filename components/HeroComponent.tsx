import Image from "next/image";
import HeroCarousel from "./HeroCarousel";

const HeroComponent = () => {
  return (
    <div className='pb-4 sm:px-4 sm:pt-4 flex flex-col lg:flex-row gap-3'>
      {/* Carousel - 70vh on all screens */}
      <div className='w-full lg:w-[67%]'>
        <HeroCarousel />
      </div>

      {/* Banner container - responsive sizing */}
      <div className='w-full lg:w-[33%] px-4 sm:px-0 flex justify-center items-center gap-4'>
        {/* Banner Image - responsive height matching carousel */}

        <div className='flex justify-center md:flex relative aspect-video w-full h-[50vh] sm:h-[80vh] md:h-[100vh] lg:h-[70vh]  rounded-xl overflow-hidden'>
          <div className='relative aspect-video md:aspect-square lg:aspect-video rounded-xl overflow-hidden group'>
            <Image
              alt='Festival Banner'
              fill
              src='/banner.jpg'
              className='object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-700'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw'
              priority
            />

            {/* Festival Title - Text with elegant shadow and border */}
            <div className='absolute top-6 left-6'>
              <h2 className='px-2 py-1 text-3xl md:text-4xl font-bold text-center font-serif tracking-wider'>
                <span className='text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] border-b-2 border-amber-300 pb-1'>
                  Nwanyị bụ <span className="text-amber-500">ịfe</span>
                </span>
                <span className='block text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] mt-2'>
                  Festival 2025
                </span>
              </h2>
            </div>

            {/* Registration Tag - Text with creative underline */}
            <div className='absolute bottom-6 right-6'>
              <p className='text-white leading-5 font-medium tracking-wider relative'>
                <span className='drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]'>
                  Registration: <br />Now open - Oct 15, 2025
                </span>
                <span className='absolute -bottom-1.5 left-0 w-full h-0.5 bg-amber-300 transform scale-x-75'></span>
              </p>
            </div>

            {/* Subtle vignette for better text contrast */}
            <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
