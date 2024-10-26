"use client";

import CountUp from "react-countup";

const stats = [
    {
        num: 361,
        text: "Problems Solved",
    },
    {
        num: 5,
        text: "Projects Completed",
    },
    {
        num: 10,
        text: "Technologies Mastered",
    },
    {
        num: 450,
        text: "Code Commits",
    },
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item, index) => {
                    return (
                        <div className="flex-1 flex gap-4 items-center xl:justify-center" key={index}>
                            <CountUp 
                                end={item.num}
                                duration={5}
                                delay={2}
                                className="text-4xl xl:text-6xl font-extrabold"
                            />
                            {/* the above code is for setting the align of the stats used */}
                            <p
                                className={`${
                                    item.text.length > 10 ? "max-w-[100px]" : "max-w-[150px]"
                                } leading-snug text-white/80`}
                            >
                            {item.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats
