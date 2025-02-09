import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">

          {/* text order-2 specifies that the texts has a 2nd priority */}
          <div className="text-center xl:text-left order-2 xl:order-none ">
            <span className="text-xl"> Software Developer </span>
            <h1 className="h1 mb-6">
              Hello I am<br /><span className="text-accent">Parthiv Chahar.</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80" style={{textAlign: 'justify'}}>
              Pursuing B.Tech in Computer Science Engineering with a focus on AI and Machine Learning. Proficient in web development using Java and Python, with expertise in building dynamic, interactive websites. Skilled in integrating front-end and back-end technologies for developing robust, scalable applications.
            </p>

            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                variant="outline" 
                size="lg" 
                className="uppercase flex items-center gap-2"
              > 
                <a href="https://drive.google.com/file/d/1s01d_oMM_nAcJj-utPV8BtKTULwm8CXU/view?usp=sharing" target="_blank">
                  Download CV
                </a>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6" 
                  iconStyles={`w-9 h-9 border rounded-full flex 
                  justify-center items-center border border-accent text-base hover:bg-accent
                  hover:text-primary hover:transition-all duration-500`}/>
              </div>
            </div>
          </div>
          
          {/* photo order-1 specifies that the photo has a 1st priority */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home
