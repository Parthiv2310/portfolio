"use client";

import {
    FaHtml5, 
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
    FaJava,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiMongodb } from "react-icons/si";

const about = {
    title: "About me",
    description: "I am a Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning. I have a strong foundation in web development, with experience in building dynamic, interactive websites using Java and Python. My skill set includes seamlessly integrating front-end and back-end technologies to create robust, scalable applications that ensure an engaging user experience.",
    info: [
        {
            fieldName: "Name",
            firldValue: "Parthiv Chahar",
        },
        {
            fieldName: "Phone",
            firldValue: "+91 84478 79891",
        },
        {
            fieldName: "College",
            firldValue: "VIT Bhopal University",
        },
        {
            fieldName: "LinkedIn",
            firldValue: "https://www.linkedin.com/in/parthiv23/",
        },
        {
            fieldName: "Nationality",
            firldValue: "Indian",
        },
        {
            fieldName: "Email",
            firldValue: "parthivchahar2003@gmail.com",
        },
        {
            fieldName: "Freelance",
            firldValue: "Available",
        },
        {
            fieldName: "Languages",
            firldValue: "English, Hindi",
        },
    ]
};

const education = {
    title: "My Education",
    description: "I have built a strong academic foundation through my schooling, which nurtured my passion for technology and problem-solving. This journey has continued with my pursuit of higher education in engineering.",
    items: [
        {
            institution: "VIT Bhopal University, Bhopal, Madhya Pradesh, India",
            duration: " 2021 - Present ",
            grade: "8.15",
        },
        {
            institution: "Kendra Vidyalaya Vikaspuri, New Delhi, India",
            duration: " 2019-2021 ",
            grade: "75.40%",
        },
        {
            institution: "Kendra Vidyalaya Vikaspuri, New Delhi, India",
            duration: " 2009-2019 ",
            grade: "76.00%",
        },
    ]
};

const certifications = {
    title: "My Certifications",
    description: "Certifications play a crucial role in validating expertise and staying updated with industry trends. They demonstrate a commitment to continuous learning, enhance professional credibility, and provide a competitive edge in the job market. Earning certifications also helps develop specialized skills, ensuring alignment with current technologies and best practices. Below are some of the certifications I have earned:",
    items:[
        {
            name: "Applied ML in Python",
            href: "https://drive.google.com/file/d/1ETe5ySUNquKubycHctfsDE9SbojcwgyG/view?usp=sharing",
            explain: "The Applied Machine Learning in Python certification provided hands-on experience with key ML concepts, including data preprocessing, model building, and evaluation. I gained practical skills in implementing algorithms like regression and classification using Python libraries, focusing on real-world applications to develop and assess machine learning models effectively.",
        },
        {
            name: "MERN Full Stack",
            href: "https://drive.google.com/file/d/1sGYulcDayiVa5W1AjvIrCHVNY9lhLQwn/view?usp=sharing",
            explain: "The MERN Stack Certification taught me to build full-stack web applications using MongoDB, Express.js, React, and Node.js. I learned to create responsive UIs with React, manage server-side logic with Node.js and Express, and interact with databases through MongoDB. This experience enhanced my ability to develop robust, scalable applications while following best practices in application architecture.",
        },
    ]
}

const skills = {
    title: "My Skills",
    description: "I have strong expertise in web development, with proficiency in building dynamic and interactive websites using Java and Python. My skills extend to seamlessly integrating front-end and back-end technologies, enabling the development of robust and scalable applications. With a specialization in Artificial Intelligence and Machine Learning, I am well-equipped to tackle modern challenges in the tech space. Additionally, I focus on creating engaging user experiences, ensuring smooth and intuitive interactions across applications.",
    skillList: [
        {
            icon: <FaHtml5/>,
            name: "Html5",
        },
        {
            icon: <FaCss3/>,
            name: "css 3",
        },
        {
            icon: <FaJs/>,
            name: "JavaScript",
        },
        {
            icon: <FaReact/>,
            name: "React.JS",
        },
        {
            icon: <FaFigma/>,
            name: "Figma",
        },
        {
            icon: <FaJava/>,
            name: "java",
        },
        {
            icon: <FaNodeJs/>,
            name: "Node.Js",
        },
        {
            icon: <SiTailwindcss/>,
            name: "tailwind.CSS",
        },
        {
            icon: <SiNextdotjs/>,
            name: "Next.JS",
        },
        {
            icon: <SiMongodb/>,
            name: "MongoDB",
        },
    ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";



const resume = () => {
    return (
        <motion.div
            initial={{opacity:0}}   
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="certification">Certification</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold ">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0" style={{textAlign: 'justify'}}>
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.grade}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* making the dot green */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* certifications */}
                        <TabsContent value="certification" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold ">{certifications.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0" style={{textAlign: 'justify'}}>
                                    {certifications.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols2 gap-[30px]">
                                        {certifications.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] min-h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 overflow-hidden"
                                                >
                                                    <p className="text-sm min-h-[60px] text-center text-white/80 lg:text-left"  style={{textAlign: 'justify'}}>{item.explain}</p>
                                                    <div className="flex items-center gap-3">
                                                        {/* making the dot green */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <a 
                                                            href={item.href} // Link to be opened
                                                            target="_blank" // Open in a new tab
                                                            rel="noopener noreferrer"
                                                            className="text-white/60 items-center justify-between"
                                                        >
                                                        {item.name}
                                                        </a>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0" style={{textAlign: 'justify'}}>{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                                    {skills.skillList.map((skill, index) => {
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                            {skill.icon}
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0" style={{textAlign: 'justify'}}>{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-10 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return(
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.firldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}
  
export default resume
