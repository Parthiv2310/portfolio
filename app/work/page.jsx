"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image"; // Import Image component

// Use the projects data with images
const projects = [
  {
    num: '01',
    title: 'Stock Explorer',
    description:
      'A real-time web app built with data scraped from Wikipedia, showcasing S&P 500 companies and their stock details. Explore companies by sector, sort them, and download the data in CSV format for future use.',
    href: 'https://github.com/Parthiv2310/Stock-and-Price-Explorer',
    image: "/assets/works/stocks.jpeg",
  },
  {
    num: '02',
    title: 'Futuristic Interface',
    description:
      'An AI-powered search engine leveraging advanced language models and vector databases. It integrates multiple search engines for more accurate and relevant results.',
    href: 'https://github.com/Parthiv2310/FUTURISTIC-SEARCH-INTERFACE',
    image: "/assets/works/futuristic.jpg",
  },
  {
    num: '03',
    title: 'Expense Tracker',
    description:
      'A Flask-based finance tracker that helps users manage income and expenses. It includes user authentication, transaction management, and analytical insights into spending patterns.',
    href: 'https://github.com/Parthiv2310/EXPENSE-TRACKER',
    image: "/assets/works/expense tracker.jpeg",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {projects.map((project, index) => (
            <div key={index} className="flex-1 flex flex-col gap-6 group">
              {/* Top Section */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {project.num}
                </div>

              {/* Title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {project.title}
              </h2>

                {project.href ? (
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent 
                      transition-all duration-500 flex justify-center items-center hover:rotate-45"
                    aria-label={`View details about ${project.title}`
                  }
                  >
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                ) : (
                  <div
                    className="w-[70px] h-[70px] rounded-full bg-gray-300 flex justify-center items-center cursor-not-allowed"
                    title="Link not available"
                  >
                    <BsArrowDownRight className="text-primary text-3xl opacity-50" />
                  </div>
                )}
                
              </div>

              {/* Image Section */}
              <div className="w-full h-[300px] overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Description */}
              <p className="text-white/60 text-justify">{project.description}</p>

              {/* Border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;



// modifications need to be done. 

/* 

"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { BsArrowDownRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: '01',
    category: 'Stocks',
    title: 'Stock and Price Explorer',
    description: 'A real-time web app built with data scraped from Wikipedia, showcasing S&P 500 companies and their stock details. Explore companies by sector, sort them, and download the data in CSV format for future use.',
    stack: [{name: 'Python'}],
    live: '',
    image: "/assets/works/stocks.jpeg",
    github: "https://github.com/Parthiv2310/Stock-and-Price-Explorer",
  },
  {
    num: '02',
    category: 'Search Interface',
    title: 'Futuristic Search Interface',
    description: 'This project is an AI-powered search engine that leverages advanced language models and efficient vector databases to deliver accurate and relevant search results. It integrates various search engines to enhance the search experience.',
    stack: [{name: 'Python'}, {name:'Html'}, {name:'CSS'}, {name:'Flask'}],
    live: '',
    image: "/assets/works/futuristic.jpeg",
    github: "https://github.com/Parthiv2310/FUTURISTIC-SEARCH-INTERFACE",
  },
  {
    num: '03',
    category: 'Tracking',
    title: 'Expense Tracker',
    description: 'This Flask-based web application serves as a comprehensive finance tracker, enabling users to manage their expenses and income securely. It provides features for user registration, authentication, transaction management, and analytical insights into spending habits.',
    stack: [{name: 'Html'}, {name:'Python'}],
    live: '',
    image: "/assets/works/expense tracker.jpeg",
    github: "https://github.com/Parthiv2310/EXPENSE-TRACKER",
  },
]

const work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    
    // update project state based on current index
    setProject(projects[currentIndex])
  }

  return <motion.section 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
  >
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[30px]">
            {/* outline num }
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline ">
              {project.num}
            </div>
            {/* project category }
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category}</h2>
            
            {/* project description }
            <p className="text-white/60">{project.description}</p>

            {/* stack }
            <ul className="flex gap-4">
              {project.stack.map((item, index) => {
                return <li key={index} className="text-xl text-accent ">
                  {item.name}
                  {index !== project.stack.length - 1 && ","}
                </li>
              })}
            </ul>
            {/* border }
            <div className="border border-white/20 "></div>
            {/* buttons }
            <div className="flex items-center gap-4 ">
              {/* live project button }
              <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowDownRight className="text-white text-3xl group-hover:text-accent "/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>

              {/* github repo button }
              <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl"/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github Repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>

            </div>
          </div>
        </div>
        <div className="w-full xl:w-[50%]">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={handleSlideChange}
          >
            {projects.map((project, index) => {
              return <SwiperSlide key={index}>
                slide
              </SwiperSlide>
            })}
          </Swiper>
        </div>
      </div>
    </div>
  </motion.section>
}

export default work


*/