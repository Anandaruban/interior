import banner2 from "../utils/banner2.png";
import { motion } from "framer-motion";
import { SlideUp } from "./animate";

const Banner2 = () => {
  return (
    <div className="container py-14">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        <div className="space-y-5 flex justify-center xl:max-w-[500px] flex-col">
          <motion.h1 variants={SlideUp(.2)} initial="initial" whileInView="animate" className="text-4xl font-bold font-serif xl:max-w-[500px]">Simple way to make stylish living room</motion.h1>
          <motion.p variants={SlideUp(.4)} initial="initial" whileInView="animate" className="text-gray-400 text-sm leading-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, magni alias unde, sequi eum est repellendus dignissimos neque dolor ducimus a.</motion.p>

          <motion.div variants={SlideUp(.6)} initial="initial" whileInView="animate" className="flex gap-3">
            <div className="max-w-[80px] space-y-2">
              <p className="text-3xl font-bold font-serif">15</p>
              <p className="text-gray-500 text-sm">Years of Experience</p>
            </div>
            <div className="max-w-[80px] space-y-2">
              <p className="text-3xl font-bold font-serif">350</p>
              <p className="text-gray-500 text-sm">Happy Clients</p>
            </div>
            <div className="max-w-[80px] space-y-2">
              <p className="text-3xl font-bold font-serif">34</p>
              <p className="text-gray-500 text-sm">Award Gained</p>
            </div>
          </motion.div>
          <div>
          <motion.button variants={SlideUp(.6)} initial="initial" whileInView="animate" className="text-sm lg:text-base border-2 border-black px-2 py-1 sm:px-4 sm:py-2 shadow-[5px_5px_0px_0px] hover:bg-black hover:text-white duration-300 hover:shadow-[5px_5px_0px_0px_gold] font-semibold">Contact Us</motion.button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <motion.img initial={{x: 100}} whileInView={{x: 0, opacity: 1}} transition={{duration: .5, delay: .5}} src={banner2} alt="" className="w-[80%] sm:w-full mx-auto" />
        </div>
      </div>
    </div>
  )
}

export default Banner2