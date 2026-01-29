import React from 'react'
import { teamData } from '../assets/assets'
import Title from './Title'
import { motion } from "motion/react";  


const Teams = () => {
  return (
    <div 
    className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 
    xl:40 text-gray-700 dark:text-white pb-30">
      <Title title="Meet Our Team" description="Our team of dedicated professionals is
       passionate about delivering exceptional results for our clients." />

       <motion.div 
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}   
      viewport={{once:true}}
      
       className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-5xl w-full gap-7">
        {teamData.map((team, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-center justify-center gap-5 p-4 border 
          border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl 
          hover:scale-105 transition-transform duration-300 shadow-gray-100 dark:shadow-white">
            <img src={team.image} alt={team.name} className="w-12 h-12 rounded-full object-cover mb-4" />
           
           <div className="flex flex-col items-center">
            <h3 className="font-bold text-lg">{team.name}</h3>
            <p className="text-sm mt-1 dark:text-white/75">{team.title}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Teams
