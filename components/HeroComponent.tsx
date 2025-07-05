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

        <div className='flex justify-center md:flex relative aspect-square w-full h-[40vh] sm:h-[80vh] lg:h-[70vh] xl:h-[70vh] rounded-xl overflow-hidden'>
          <div className="relative aspect-square rounded-xl overflow-hidden border bg-gradient-to-r from-purple-800/80 via-amber-800/80 to-teal-800/80">
            <Image
              alt='Festival Banner'
              fill
              src='/banner.jpg'
              className='object-cover rounded-xl'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
