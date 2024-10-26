"use client";

import {BsArrowDownRight} from "react-icons/bs"
import Link from "next/link";

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: "I have extensive experience in web development, particularly using React for building dynamic user interfaces. My projects have involved creating responsive and interactive web applications, utilizing backend technologies like Node.js and Express, and managing data with MongoDB. I focus on implementing best practices, including version control with Git, ensuring code maintainability, and optimizing performance for a seamless user experience.",
    href: "https://github.com/Parthiv2310/EXPENSE-TRACKER",
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description: "In my UI/UX design process, I leverage Figma to create intuitive and visually appealing interfaces. I am skilled in designing wireframes, prototypes, and high-fidelity mockups that reflect user needs and enhance usability. My approach incorporates user feedback and usability testing to iterate on designs, ensuring that the final product aligns with user expectations while maintaining aesthetic appeal.",
    href: "https://github.com/Parthiv2310/FUTURISTIC-SEARCH-INTERFACE",
  },
  {
    num: '03',
    title: 'AI/ML',
    description: "I have a strong foundation in AI and machine learning, having developed projects that utilize algorithms for predictive modeling and data analysis. I focus on integrating machine learning models into applications to solve real-world problems, such as crop disease prediction and healthcare management. My knowledge includes working with frameworks like TensorFlow and scikit-learn, as well as applying techniques like supervised and unsupervised learning to extract insights from data.",
    href: "https://github.com/Parthiv2310/Stock-and-Price-Explorer",
  },
  {
    num: '04',
    title: 'Java Development',
    description: "Java is a popular programming language used to create all sorts of applications, from web and mobile apps to large enterprise systems. In my projects, I’ve built reliable and efficient software using Java, often with helpful tools that make the development process smoother. I focus on creating user-friendly features and ensuring everything runs smoothly by testing my code thoroughly. My work also involves connecting applications to databases to store and manage data effectively.",
    href: "",
  },
]

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0}}
          animate={{
            opacity: 1,
            transition: {delay:2.4, duration:0.4, ease: "easeIn"},
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >

          {services.map((service, index) => {
            return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              <div>
                
                {/* top */}
              <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  
                  {/* title */}
                  <h2 className="text-[30px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                    <Link 
                      href={service.href} 
                      target="_blank"
                      className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent
                      transition-all duration-500 flex justify-center items-center hover:rotate-45"
                    >
                      <BsArrowDownRight className="text-primary text-3xl"/>
                    </Link>

                  </div>
              </div>
              {/* description */}
              <p className="text-white/60" style={{textAlign: 'justify'}}>{service.description}</p>

              {/* border */}
              <div className="border-b border-white/20 w-full "></div>
            </div>
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
