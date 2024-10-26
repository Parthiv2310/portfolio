"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative overflow-hidden flex items-center justify-center">
      {/* Static Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn"}
         }}
      >
        <div className="relative w-[300px] h-[300px]">
          <Image
            src="/assets/parthiv1.png"
            priority
            quality={100}
            fill
            alt="Portfolio Image"
            className="object-cover rounded-md"
          />
        </div>
      </motion.div>

      {/* Animated Rectangle Outline */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn"}
        }}
        width="320"
        height="320"
        viewBox="0 0 320 320"
        className="absolute rounded-md"
      >
        <motion.rect
          x="10"
          y="10"
          width="300"
          height="300"
          stroke="#00ff99"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ strokeDasharray: "0 1000" }}
          animate={{
            strokeDasharray: ["100 900", "600 400", "1000 0"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
