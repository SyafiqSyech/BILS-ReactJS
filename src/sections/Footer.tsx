import { motion } from 'framer-motion'
import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='bg-black px-16 pt-24 pb-16 max-md:pt-24'>
        <div className='h-[30svh] max-sm:h-auto aspect-[827/436]'></div>
        <div className='h-[84.5px] max-lg:h-[143px] max-md:h-[117px] max-sm:h-[247px] pt-16 max-md:pt-8'></div>
      </div>
      <div className='h-auto max-sm:h-auto w-full bg-black fixed bottom-0 z-0 pt-24 pb-16 max-md:pt-24 text-white flex flex-col justify-between items-center'>
        <div className='w-full overflow-hidden'>
          <motion.div 
            initial={{ x: 0 }}
            animate={{ x: '-20%' }}
            transition={{ duration: 8, ease: 'linear', repeat: Infinity}}
            className='flex w-max'
          >
            <img className='h-[30svh] max-sm:h-auto object-contain object-bottom' src='BilsCoffeeLogo2White.png'/>
            <img className='h-[30svh] max-sm:h-auto object-contain object-bottom' src='BilsCoffeeLogo2White.png'/>
            <img className='h-[30svh] max-sm:h-auto object-contain object-bottom' src='BilsCoffeeLogo2White.png'/>
            <img className='h-[30svh] max-sm:h-auto object-contain object-bottom max-md:hidden' src='BilsCoffeeLogo2White.png'/>
            <img className='h-[30svh] max-sm:h-auto object-contain object-bottom max-md:hidden' src='BilsCoffeeLogo2White.png'/>
          </motion.div>
        </div>
        <div className='lg:grid grid-cols-[1fr_5fr_1fr] pt-16 max-md:pt-8 max-w-[92rem] w-full'>
          <div className='flex gap-8 max-lg:hidden'>
            <p className='text-sm pt-4'>idk taro text apa</p>
          </div>
          <div className='sm:flex gap-12 justify-center'>
            <p className='pt-4 cursor-pointer hoverUnderline text-center'>Home</p>
            <p className='pt-4 cursor-pointer hoverUnderline text-center'>Locations</p>
            <p className='pt-4 cursor-pointer hoverUnderline text-center'>Contacts</p>
            <p className='pt-4 cursor-pointer hoverUnderline text-center'>Menu</p>
            <p className='pt-4 cursor-pointer hoverUnderline text-center'>Go-Food</p>
          </div>
          <div className='flex gap-8 justify-end max-lg:justify-center items-end max-lg:pt-10'>
            <p className='text-sm max-lg:text-xs pt-4 text-center hidden'>idk taro text apa</p>
            <p className='text-sm max-lg:text-xs pt-4 cursor-pointer hoverUnderline'>Made by Syaf</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer