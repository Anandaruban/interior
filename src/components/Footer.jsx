import logo from "../utils/Logo.png"
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";
import { LINKEDIN_LINK, GITHUB_LINK,
  EMAIL_LINK, } from "../utils/constants";
import { motion } from "framer-motion";
import { SlideLeft } from "./animate";

const Footer = () => {

  const date = new Date().getFullYear()

  return (
    <motion.footer variants={SlideLeft(.2)} initial="initial" whileInView="animate"> 
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info section */}
          <div className="space-y-4 font-semibold">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="" className="w-6" />
              <p className="text-xl font-semibold">Interior</p>
            </div>
            <p>Coimbatore, Tamil Nadu, India</p>
            <p>{date} TCJ All rights reserved</p>
          </div>
          {/* Footer Link */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">About us</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Designer</a>
                </li>
                <li>
                  <a href="#">Craftmanship</a>
                </li>
                <li>
                  <a href="#">Sustainability</a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">Support</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#">FAQ's</a>
                </li>
                <li>
                  <a href="#">Shipping & Returns</a>
                </li>
                <li>
                  <a href="#">Care Guide</a>
                </li>
                <li>
                  <a href="#">Guaranty</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Contact us</h1>
            <ul className="text-base font-semibold space-y-4">
              <li className="space-x-3">
                <div className="flex gap-[2%] pt-1">
                  <a href={LINKEDIN_LINK} target="_blank">
                    <span className="text-white bg-[#0a66c2] flex items-center justify-center h-[2.6rem] w-[2.6rem] rounded-[50%] text-[1.2rem] leading-[3rem] hover:scale-[1.05] transition-transform duration-300 ease-in-out">
                      <SiLinkedin />
                    </span>
                  </a>
                  <a
                    href={GITHUB_LINK}
                    className="text-white bg-[#333] flex items-center justify-center h-[2.6rem] w-[2.6rem] rounded-[50%] text-[1.2rem] leading-[3rem] hover:scale-[1.05] transition-transform duration-300 ease-in-out"
                    target="_blank"
                  >
                    <span>
                      <SiGithub />
                    </span>
                  </a>
                  <a
                    href={"mailto:" + EMAIL_LINK}
                    className="text-white bg-[#ea4335] flex items-center justify-center h-[2.6rem] w-[2.6rem] rounded-[50%] text-[1.2rem] leading-[3rem] hover:scale-[1.05] transition-transform duration-300 ease-in-out"
                    target='_blank'
                  >
                    <span>
                      <SiGmail />
                    </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom section */}
        <p className="text-center text-sm font-semibold  border-t-2 pt-5 mt-5">
          &copy; {date} TCJ. All rights reserved
        </p>
      </div>
    </motion.footer>
  )
}

export default Footer
