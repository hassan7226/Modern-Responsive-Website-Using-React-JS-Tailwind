import React from 'react'
import assets from '../assets/assets'
import Title from './Title';
import ServicesCard from './ServicesCard';
import { motion } from "motion/react";  

const Services = () => {

    const servicesData = [
    {
        title: "Web Development",
        description: "Building responsive and modern websites.",    
        icon: assets.ads_icon
    },
    {
        title: "Graphic Design",
        description: "Creating visually appealing graphics and layouts.",
        icon: assets.marketing_icon     
    }
    ,
    {
        title: "Digital Marketing",
        description: "Promoting products and services through digital channels.",
        icon: assets.content_icon
    },
    {
        title: "UI/UX & Product Design",
        description: "Intuitive interfaces and user experiences that improve usability and customer satisfaction.",
        icon: assets.content_icon
    },
    {
        title: "SEO & Performance Optimization",
        description: "Improve your website speed, rankings, and visibility to attract more organic traffic.",
        icon: assets.content_icon
    },
    {
        title: "Social Media Management",
        description: "We help you build a strong social media presence and engage with your audience.",
        icon: assets.social_icon
    }
  ]; 
  return (
    <motion.div 
          initial="hidden"
      whileInView="visible"
      transition={{staggerChildren:0.1}}

    id="services" className='relative flex flex-col items-center gap-7
    px-4 sm:px-12 md:px-24 xl:px-40 pt-30  text-gray-700 dark:text-white '>
      <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70
      -z-1  dark:hidden' />

      <Title title="Our Services" description="From strategy to execution, 
      we craft digital solutions that move your business forward." />

      <div className="flex flex-col md:grid grid-cols-2 ">
        {servicesData.map((service,index) => (
            <ServicesCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

export default Services
