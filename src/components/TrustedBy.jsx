import React from "react";
import { company_logos } from "../assets/assets";
import { motion } from "motion/react";

const TrustedBy = () => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-10 px-10 sm:px12 lg:px-24 xl-40 text-gray-700 dark:white/80"
    >
      <motion.h3
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="font-semibold"
      >
        Trusted by Leading Companies
      </motion.h3>
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
        
        className="flex items-center justify-center gap-8 
      flex-wrap m-4"
      >
        {company_logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            className="max-h-5
          sm:max-h-6 dark:drop-shadow-xl"
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TrustedBy;
