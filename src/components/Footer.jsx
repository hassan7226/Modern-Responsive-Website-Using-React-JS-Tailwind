import React from 'react'
import assets from '../assets/assets'

const Footer = ({theme,setTheme}) => {
  return (
    <div>
    <div className=' bg-slate-50 dark:bg-gray-900 text-gray-700 dark:text-white
    pt-10 pb-10 px-4 sm:px-12 md:px-24 xl:px-40 flex flex-col md:flex-row 
    gap-10 justify-between'>
     
    {/*      footer top*/}

            <div className="gap-6 flex flex-col">
           <img src={theme=== "dark" ? assets.logo_dark : assets.logo} alt="" className="w-32 sm:w-44" />
           <p className="max-w-md">From strategy to execution,
             we craft digital solutions that move your business forward.</p>

             <ul className='flex gap-8 font-bold'>
                <li><a href="/home" className="">Home</a></li>
                <li><a href="/about" className="">About</a></li>
                <li><a href="/services" className="">Services</a></li>
                <li><a href="/contact" className="">Contact</a></li>

             </ul>
        </div>

        <div className="gap-4 flex flex-col text-gray-600 dark:text-gray-400">
            <h3 className="font-bold text-xl">Subcribe to our newsletter</h3>
            <p className="text-md">The latest news, articles, and resources, sent to your inbox weekly.</p>
            <div className="">
                <input type="email" placeholder='Enter your email' className=' w-50 sm:w-90 px-4 py-4 rounded-l-full
                 border border-gray-300 outline-none dark:bg-gray-800 dark:border-gray-600' />
                <button className='bg-primary text-white px-6 py-4 rounded-r-full
                 hover:scale-105 transition-all '>Subscribe</button>
            </div>
        </div>   
        </div>

        <hr className="border-gray-300 dark:border-gray-700 my-2" />

      {/* Bottom footer */}
      <div className="flex flex-col md:flex-row 
      justify-between items-center text-gray-600 dark:text-gray-400 px-4 
      sm:px-12 md:px-24 xl:px-40">
            <p className="">Copyright 2025 © Digital Agency - All Right Reserved.</p>
            
            <div className="pb-6 pt-4 flex items-center justify-center">
                <img src={assets.facebook_icon} alt="" className="" />
                <img src={assets.twitter_icon} alt="" className="mx-4" />
                <img src={assets.linkedin_icon} alt="" className="" />
                <img src={assets.instagram_icon} alt="" className="mx-4" />
            </div>
        </div>
    </div>
  )
}

export default Footer
