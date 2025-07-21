import { Minus } from "lucide-react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className='flex flex-col w-full py-32 items-center justify-center'>
      <Image
        alt='logo'
        priority
        width={70}
        height={80}
        src='/logo.webp'
        className='object-cover aspect-auto shrink-0'
      />
      <div className='flex'>
        <Minus className='h-6 w-6 animate-spin mr-2' />
        <p>Please wait...</p>
      </div>
    </div>
  );
};

export default Loading;
