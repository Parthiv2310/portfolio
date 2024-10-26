"use client";

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation";

const Pagetransition = ({children}) => {
    const pathname = usePathname();
  return (
    <AnimatePresence>
        <div key={pathname}>
            <motion.div 
            initial={{opacity:1}} 
            animate={{
                opacity:0, 
                tranistion: {delay:1, duration: 0.4, ease:"easeInOut"
            }}}
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
            />
            {children}
        </div>
    </AnimatePresence>
  )
  //begin from 27:50
}

export default Pagetransition
