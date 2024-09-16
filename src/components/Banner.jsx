import banner from "../utils/banner.png";
import { motion } from "framer-motion";
import { SlideUp } from "./animate";

const Banner = () => {
  return (
    <div className="container py-14">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        <div className="flex justify-center">
          <motion.img initial={{x: -100}} whileInView={{x: 0, opacity: 1}} transition={{duration: .5, delay: .5}} src={banner} alt="" className="w-[95%] sm:w-full mx-auto" />
        </div>
        <div className="space-y-5 flex justify-center flex-col xl:max-w-[500px]">
          <motion.h1 variants={SlideUp(.2)} initial="initial" whileInView="animate" className="text-4xl font-bold font-serif xl:max-w-[500px]">We believe that a team makes any project better</motion.h1>
          <motion.p variants={SlideUp(.4)} initial="initial" whileInView="animate" className="text-gray-400 text-sm leading-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, magni alias unde, sequi eum est repellendus dignissimos neque dolor ducimus a.</motion.p>
          <div>
          <motion.button variants={SlideUp(.8)} initial="initial" whileInView="animate" className="text-sm lg:text-base border-2 border-black px-2 py-1 sm:px-4 sm:py-2 shadow-[5px_5px_0px_0px] hover:bg-black hover:text-white duration-300 hover:shadow-[5px_5px_0px_0px_gold] font-semibold">Discover Now</motion.button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Banner