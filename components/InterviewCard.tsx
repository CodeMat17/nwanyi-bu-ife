// src/components/InterviewCard.tsx
import { motion } from "framer-motion";
import Image from "next/image";

interface InterviewCardProps {
  id: number;
  name: string;
  title: string;
  excerpt: string;
  image: string;
}

export default function InterviewCard({
  name,
  title,
  excerpt, image
}: InterviewCardProps) {
  return (
    <motion.div
      className='bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow'
      whileHover={{ y: -10 }}>
      <div className='relative w-full h-48 object-cover aspect-square overflow-hidden'>
        <Image 
          alt={name} 
          fill 
          src={image} 
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className='px-6 py-4'>
        <h3 className='text-xl font-playfair font-bold'>
          {name}
        </h3>
        <p className='text-amber-600'>{title}</p>
        <p className='mt-2 text-muted-foreground line-clamp-3 leading-6'>{excerpt}</p>
        <button className='mt-3 text-sky-700 font-medium flex items-center hover:text-purple-900 transition-colors'>
          Read Full Interview
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 ml-1'
            viewBox='0 0 20 20'
            fill='currentColor'>
            <path
              fillRule='evenodd'
              d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
