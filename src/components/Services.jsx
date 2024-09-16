import { FaVectorSquare } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { BiSolidDollarCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import { SlideUp } from "./animate";

const Services = () => {

  const serviceCard = [
    {
      id : 1,
      title : "Luxury Facilities",
      description : "Lorem ipsum dolor sit, Lorem ipsum dolor sit amet consectetur adipisicing elit. amet consectetur adipisicing elit.",
      icon : <FaVectorSquare />,
      delay : .2,
    },
    {
      id : 2,
      title : "Affordable Price",
      description : "Lorem ipsum dolor sit, Lorem ipsum dolor sit amet consectetur adipisicing elit. amet consectetur adipisicing elit.",
      icon : <BiSolidDollarCircle />,
      delay : .4,
    },
    {
      id : 3,
      title : "Smooth WorkFlow",
      description : "Lorem ipsum dolor sit, Lorem ipsum dolor sit amet consectetur adipisicing elit. amet consectetur adipisicing elit.",
      icon : <FaPenToSquare />,
      delay : .6,
    },
  ]

  return (
    <div className="container py-20 bg-black text-white">
      <div className="text-center space-y-3 m-auto mb-8 w-[300px]">
        <motion.h1 variants={SlideUp(.2)} initial="initial" whileInView="animate" className="text-3xl font-bold font-serif">What we provide</motion.h1>
        <motion.p variants={SlideUp(.4)} initial="initial" whileInView="animate" className="text-gray-500 text-sm">Bring your dream home to life with one-on-one design help & hand picked products</motion.p>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {serviceCard.map((item) => {
          return (
            <motion.div variants={SlideUp(item.delay)} initial="initial" whileInView="animate" key={item.id} className="space-y-5 border px-6 py-12 border-gray-300 p-6 hover:bg-black hover:text-white hover:shadow-[5px_5px_0px_0px_gold] duration-300">
              <span className="text-xl border-2 border-gray-300 rounded-full p-3 inline-block">{item.icon}</span>
              <p className="text-2xl font-serif font-bold">{item.title}</p>
              <p className="text-gray-400 text-xs">{item.description}</p>
              <a href={item.link} className="border-b border-black">Learn more</a>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Services