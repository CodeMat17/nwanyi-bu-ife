import { motion, Variants, Transition } from "framer-motion";
import Image from "next/image";

type Props = {
  title: string;
  subtitle: string;
};

const GlowingBanner = ({ title, subtitle }: Props) => {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const glowVariants: Variants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const separatorVariants: Variants = {
    hidden: { width: 0 },
    visible: {
      width: "8rem",
      transition: {
        duration: 1.2,
        ease: "circOut",
      },
    },
  };

  // Custom transitions
  const shimmerTransition: Transition = {
    duration: 10,
    repeat: Infinity,
    ease: "linear",
  };
  const delayedShimmerTransition: Transition = {
    duration: 8,
    repeat: Infinity,
    ease: "linear",
    delay: 5,
  };
  const dotTransition: Transition = {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  };

  return (
    <div className='relative w-full min-h-[40vh] overflow-hidden'>
      {/* Background layers container */}
      <div className='absolute inset-0 z-0 overflow-hidden'>
        {/* New Banner Image - Added with parallax effect */}
        <motion.div
          className='absolute inset-0'
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}>
          <Image
            src='/new_banner.jpg'
            alt='Festival Banner'
            fill
            priority
            quality={100}
            className='object-cover'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
          />
        </motion.div>

        {/* Dark overlay for better text contrast */}
        <div className='absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60'></div>

        {/* Color Accent Layers */}
        <div className='absolute -top-[20%] -left-[15%] w-[130%] h-[130%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-400/30 via-transparent to-transparent mix-blend-soft-light animate-pulse-slow'></div>
        <div className='absolute -bottom-[15%] -right-[10%] w-[110%] h-[110%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-400/20 via-transparent to-transparent mix-blend-lighten animate-float'></div>
        <div className='absolute top-[30%] left-[35%] w-[40%] h-[40%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500/25 via-transparent to-transparent mix-blend-screen animate-pulse'></div>

        {/* Glowing Elements - enhanced luminosity */}
        <motion.div
          className='absolute top-[25%] left-[20%] w-64 h-64 bg-teal-600/50 rounded-full filter blur-[110px]'
          variants={glowVariants}
          initial='initial'
          animate='animate'
          style={{ opacity: 0.3 }}
        />
        <motion.div
          className='absolute bottom-[35%] right-[20%] w-80 h-80 bg-amber-800 rounded-full filter blur-[130px]'
          variants={glowVariants}
          initial='initial'
          animate='animate'
          style={{ opacity: 0.4 }}
          transition={{ delay: 0.4 }}
        />
        <motion.div
          className='absolute top-[35%] right-[35%] w-64 h-64 bg-purple-600/50 rounded-full filter blur-[100px]'
          variants={glowVariants}
          initial='initial'
          animate='animate'
          style={{ opacity: 0.3 }}
          transition={{ delay: 0.8 }}
        />

        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjAuNSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] bg-[size:80px] opacity-[0.1] mix-blend-overlay"></div>

        {/* Enhanced Shimmer Effect */}
        <motion.div
          className='absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.08)_50%,transparent_100%)]'
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={shimmerTransition}
        />

        {/* Subtle Light Streaks */}
        <motion.div
          className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent'
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={shimmerTransition}
        />
        <motion.div
          className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/15 to-transparent'
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={delayedShimmerTransition}
        />
      </div>

      {/* Centered Content */}
      <motion.div
        className='relative z-10 h-full flex flex-col items-center justify-center text-center px-4 py-12'
        variants={containerVariants}
        initial='hidden'
        animate='visible'>
        <div className='max-w-4xl'>
          {/* Decorative elements */}
          <motion.div
            className='absolute top-8 left-8 w-16 h-16 bg-amber-400 rounded-full filter blur-[60px]'
            style={{ opacity: 0.2 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={dotTransition}
          />
          <motion.div
            className='absolute bottom-8 right-8 w-16 h-16 bg-teal-400 rounded-full filter blur-[60px]'
            style={{ opacity: 0.2 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ ...dotTransition, delay: 1 }}
          />

          {/* Title with gradient text */}
          <motion.h1
            className='text-4xl md:text-6xl font-bold mb-4 text-shadow-lg'
            variants={childVariants}>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-teal-200 to-purple-200'>
              {title}
            </span>
          </motion.h1>

          {/* Elegant separator */}
          <motion.div
            className='relative flex justify-center my-3'
            variants={childVariants}>
            <motion.div
              className='h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent'
              variants={separatorVariants}
            />
            <motion.div
              className='absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-amber-400 rounded-full'
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={dotTransition}
            />
          </motion.div>

          {/* Subtitle with text shadow */}
          <motion.p
            className='text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed relative font-light'
            variants={childVariants}>
            <span className='relative inline-block text-shadow'>
              {subtitle}
              <motion.span
                className='absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400/60 to-purple-400/60'
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 1.5, ease: "circOut" }}
              />
            </span>
          </motion.p>

          {/* Floating particles */}
          <motion.div
            className='absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full'
            style={{ opacity: 0.5 }}
            animate={{
              x: ["0rem", "5rem", "3rem", "0rem"],
              y: ["0rem", "-3rem", "-1rem", "0rem"],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className='absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-amber-300 rounded-full'
            style={{ opacity: 0.4 }}
            animate={{
              x: ["0rem", "-4rem", "-2rem", "0rem"],
              y: ["0rem", "2rem", "4rem", "0rem"],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.div
            className='absolute bottom-1/4 left-2/3 w-1 h-1 bg-teal-300 rounded-full'
            style={{ opacity: 0.3 }}
            animate={{
              x: ["0rem", "-3rem", "-6rem", "0rem"],
              y: ["0rem", "-4rem", "-2rem", "0rem"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default GlowingBanner;
