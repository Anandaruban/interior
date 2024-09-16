import brand1 from '../utils/brands/1.png'
import brand2 from '../utils/brands/2.png'
import brand3 from '../utils/brands/3.png'
import brand4 from '../utils/brands/4.png'
import brand5 from '../utils/brands/5.png'
import { motion } from 'framer-motion'
import { SlideLeft } from './animate'

const Brands = () => {
  return (
    <div className='container py-14'>
      <div className='flex flex-wrap lg:justify-between items-center justify-between'>
        <motion.img variants={SlideLeft(.2)} initial="initial" animate="animate" src={brand2} alt="brand" className='w-[120px] sm:w-[190px]' />
        <motion.img variants={SlideLeft(.4)} initial="initial" animate="animate" src={brand3} alt="brand" className='w-[120px] sm:w-[190px]' />
        <motion.img variants={SlideLeft(.6)} initial="initial" animate="animate" src={brand4} alt="brand" className='w-[120px] sm:w-[190px]' />
        <motion.img variants={SlideLeft(.8)} initial="initial" animate="animate" src={brand5} alt="brand" className='w-[120px] sm:w-[190px]' />
        <motion.img variants={SlideLeft(1.0)} initial="initial" animate="animate" src={brand1} alt="brand" className='w-[120px] sm:w-[190px]' />
      </div>
    </div>
  )
}

export default Brands