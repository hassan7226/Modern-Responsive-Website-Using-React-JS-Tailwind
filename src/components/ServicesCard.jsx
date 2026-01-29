import React from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react";  


const ServicesCard = ({service,index}) => {
  return (

      <motion.div 
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}   
      viewport={{once:true}}
      className="relative overflow-hidden  m-2 sm:m-4 rounded-b-xl
       border border-gray-200 dark:border-gray-800 shadow-2xl shadow-gray-100
       dark:shadow-white/10 
       hover:shadow-primary/30 hover:scale-105 transition-all">
{/* 
       <div className="pointer-events-none blur-2xl rounded-full bg-linear-to-r
        from-blue-500 via-indigo-500 to-purple-500 w-75 h-75 absolute z-0
        transition-opacity duration-500 mix-blend-lighten opacity-70"/> */}

        <div className="flex flex-col items-center sm:flex-row gap-5 sm:gap-10 p-8 hover:p-7.5 
        hover:m-0.5 transition-all rounded-xl bg-white dark:bg-gray-900
        z-10 relative">

        <div className="bg-gray-100 dark:bg-gray-800 rounded-full">
            <img src={service.icon} alt="" className="size-12 bg-white dark:bg-gray-900
             rounded-full m-2" />
        </div>
        <div className="flex-1 text-center sm:text-left">
            <h3 className="font-bold">{service.title}</h3>
            <p className="text-sm mt-2">{service.description}</p>
        </div>
 
        </div> 
      </motion.div>
  )
}

export default ServicesCard
