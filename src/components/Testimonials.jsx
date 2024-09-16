import { motion } from "framer-motion";
import { SlideUp } from "./animate";

const Testimonials = () => {

  const TestimonialData = [
    {
      id: 1,
      name: "John Doe",
      designation: "Designer",
      img: "https://i.pravatar.cc/300?img=1",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      delay: 0.2,
    },
    {
      id: 2,
      name: "Alex",
      designation: "Developer",
      img: "https://i.pravatar.cc/300?img=2",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      delay: 0.4,
    },
    {
      id: 3,
      name: "George",
      designation: "Manager",
      img: "https://i.pravatar.cc/300?img=3",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      delay: 0.6,
    },
  ];

  return (
    <div className="py-14">
      <div className="text-center space-y-4 m-auto mb-8 max-w-[550px]">
        <motion.h1 variants={SlideUp(.2)} initial="initial" whileInView="animate" className="text-4xl font-bold font-serif">Words from our coustomers</motion.h1>
        <motion.p variants={SlideUp(.4)} initial="initial" whileInView="animate" className="text-gray-500 text-sm max-w-[350px] mx-auto">Bring your dream home to life with one-on-one design help & hand picked products</motion.p>
      </div>

      <div className="bg-black text-white p-12">
        <div className="container grid sm:grid-cols-3 gap-8 grid-cols-1">
          {TestimonialData.map((item) => {
              return (
              <motion.div variants={SlideUp(item.delay)} initial="initial" whileInView="animate" key={item.id} className="border border-gray-500 px-5 py-10  group hover:bg-white duration-300">
                <div className="flex items-center gap-3">
                  <img src={item.img} alt="" className="w-[60px] rounded-full" />
                  <div>
                    <h1 className="text-sm group-hover:text-black font-bold duration-300">{item.name}</h1>
                    <h1 className="text-xs font-bold group-hover:text-black duration-300">{item.designation}</h1>
                  </div>
                </div>

                <div className="mt-5 border-t-2 border-gray-500 pt-5">
                  <p className="text-sm text-gray-300 group-hover:text-black duration-300">{item.text}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Testimonials