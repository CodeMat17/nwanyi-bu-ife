import { Minus } from "lucide-react";

const Loading = () => {
  return (
    <div className='flex w-full min-h-screen items-center justify-center'>
      <Minus className='h-6 w-6 animate-spin mr-2' />
      <p>Please wait...</p>
    </div>
  );
};

export default Loading;
