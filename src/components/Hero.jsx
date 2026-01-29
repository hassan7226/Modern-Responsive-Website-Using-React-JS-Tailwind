import React from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react";  


const Hero = () => {
  return (
    <div id="hero" className='Hero flex flex-col items-center text-center 
    py-20 px-4 sm:px-12 lg:px-24 xl:px-40 gap-8 text-gray-700 dark:text-white
    w-full overflow-hidden'>

      <motion.div 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}   
      viewport={{once:true}}
      
      className="flex items-center gap-2 p-1.5 pr-4 border border-gray-500 rounded-full">
        <img className='w-20' src={assets.group_profile} alt="" />
        <p className='text-xs font-medium'>trusted by 10k+ people</p>
      </motion.div>

        <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}   
        viewport={{once:true}}

        className="text-4xl sm:text-5xl md:text-6xl 
        xl:text-[84px] font-medium xl:leading-23.75 max-w-5xl">Turning imagination into <span 
        className="bg-linear-to-r from-primary to-[#4dBcea] text-#4dBcea bg-clip-text text-transparent"> digital </span> impact.</motion.h1>

        <motion.p 
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}   
        viewport={{once:true}}
        className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 
        max-w-4/5 sm:max-w-3/4 pb-3">We design and develop modern, high-performance websites and digital solutions that help brands stand out, attract customers, and scale faster.</motion.p>

        <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}   
        viewport={{once:true}}
        className="relative">
            <img src={assets.hero_img} alt="" className='w-full max-w-6xl'/>
            <img src={assets.bgImage1} alt="" className='absolute -top-40 -right-40
            sm:-top-100 sm:right-70 -z-1 dark:hidden'/>
        </motion.div>
    </div>
  )
}

export default Hero
