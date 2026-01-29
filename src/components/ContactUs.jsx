import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast';

const ContactUs = () => {

    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "553dd978-6ed7-4f82-9d79-81fe82724f7e");

   try{

     const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
        toast.success("Form submitted successfully!");
      event.target.reset();
    } else {
        toast.error("There was an error submitting the form.");}
  }
  catch (error) {
    toast.error("There was an error submitting the form.");
  }
}

  return (
    <div id="contact" className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 
    xl:40 text-gray-700 dark:text-white pb-30'>
      <Title title="Contact Us" description="We'd love to hear from you!, our team is ready to answer all your questions." />

      <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-6 max-w-4xl w-full">        
        
        <div className=" ">
            <label className="block mb-2 font-medium">Your name</label>
            <div className="flex items-center border border-gray-300 gap-2
             rounded-lg px-3 py-2 dark:border-gray-600">
                <img src={assets.person_icon} alt="" className="" />
                <input type="text" name="name" className="w-full text-md p-2 outline-none " placeholder="Enter Your Name" required/>
            </div>
        </div>   

        <div className=" ">
            <label className="block mb-2 font-medium">Your email</label>
            <div className="flex items-center border border-gray-300 gap-2
             rounded-lg px-3 py-2 dark:border-gray-600">
                <img src={assets.email_icon} alt="" className="" />
                <input type="email" name="email" className="w-full text-md p-2 outline-none " placeholder="Enter Your Email" required />
            </div>
        </div>  

       
        <div className="sm:col-span-2">
            <label className="block mb-2 font-medium">Enter your message</label>
            <div className="">
                <textarea type="text" name="message" rows ={8} className="w-full text-md
                 p-3 outline-none rounded-lg border border-gray-300 
                 dark:border-gray-600" placeholder="Enter Your Message" required />
            </div>
        </div> 

     <div className="">
         <button className="flex  bg-primary text-md text-white 
       px-12 py-3 rounded-full gap-2 cursor-pointer
        hover:scale-105 transition-all ">
        Submit
        <img src={assets.arrow_icon} alt="" />
      </button>
</div>
      </form>
     
    </div>
  )
}

export default ContactUs
