import hero from "../utils/hero.png";
import { motion } from "framer-motion";
import { SlideUp } from "./animate";

const Title = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[550px] gap-10">
        <div className="flex flex-col justify-center gap-7 md:pr-8 xl:pr-52 text-center md:text-left pt-20 md:pt-0 px-10">
        <motion.h1 variants={SlideUp(.3)} initial="initial" animate="animate" className="text-3xl  font-bold font-serif">SKETCH LUXURY INTERIOR DESIGN</motion.h1>
          <motion.p variants={SlideUp(.5)} initial="initial" animate="animate" className="text-sm text-gray-500">Bring your dream to life with one-on-one design help & hand picked products tailored to your style, space and budget.</motion.p>

          <div className="space-x-4">
            <motion.button variants={SlideUp(.8)} initial="initial" animate="animate" className="text-sm lg:text-base bg-black text-white border-2 border-black px-4 py-2 shadow-[5px_5px_0px_0px_gold] font-semibold">GET STARTED</motion.button>
            <motion.button variants={SlideUp(.9)} initial="initial" animate="animate" className="text-sm lg:text-base border-2 border-black px-4 py-2 shadow-[5px_5px_0px_0px] hover:bg-black hover:text-white duration-300 hover:shadow-[5px_5px_0px_0px_gold] font-semibold">CONTACT US</motion.button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <motion.img initial={{x: 100}} animate={{x: 0}} transition={{duration: .5, delay: .5}} src={hero} alt="hero" className="w-[80%] md:w-[700px] object-cover" />
        </div>
      </div>
    </div>
  )
}

export default Title