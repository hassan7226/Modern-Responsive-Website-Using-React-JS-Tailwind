import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const OurWork = () => {
    const
    ourWorkData=[
        {
            title: "Marketing Campaign Alpha",
            description: "A comprehensive marketing campaign that boosted brand awareness by 40%.",
            image: assets.work_mobile_app
        },
        {
            title: "Modern Website Beta",
            description: "A modern web application built with React and Node.js.",
            image: assets.work_dashboard_management
        },
        {
            title: "E-Commerce Platform Gamma",
            description: "An e-commerce platform with integrated payment solutions.",
            image: assets.work_fitness_app
        }
    ]
  return (
    <div id="work"  className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 
    xl:40 pt-30 text-gray-700 dark:text-white pb-30'>
      <Title title="Our Latest Work" description="Explore our portfolio of successful projects 
      that showcase our expertise and commitment to excellence." />   

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 max-w-5xl w-full gap-7">

        {ourWorkData.map((work, index) => (
          <div key={index} className="rounded-xl shadow-lg overflow-hidden 
          hover:scale-105 transition-transform duration-300">
            <img src={work.image} alt={work.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg">{work.title}</h3>
              <p className="text-sm mt-2 dark:text-white/75">{work.description}</p>
            </div>
          </div>
        ))}
      </div>    
    </div>
  )
}

export default OurWork
