import { motion } from 'framer-motion'

const Contacts = () => {

  const boxState = {
    rest: {
      backgroundColor: '#FFFFFF',
      transition: {
        duration: .2,
      }
    },
    hover: {
      backgroundColor: '#E8E8E8',
      transition: {
        duration: .2,
      }
    }
  }

  return (
    <div className='px-16 py-8 max-md:px-8 flex flex-col' id='contacts'>
      <p className='txt2 text-center pb-12'>Contacts</p>
      <div className='flex justify-center h-full gap-8 max-lg:gap-4 max-sm:gap-2 max-md:grid max-md:grid-cols-2 max-md:grid-rows-2'>
        <motion.div
          initial='rest'
          whileHover='hover'
          animate='rest'
          variants={boxState}
          className='md:aspect-square md:w-72 py-8 cursor-pointer border-2 rounded-[2rem] md:rounded-[3rem] h-full flex flex-col justify-center items-center' 
          onClick={ () => window.open()}
        >
          <img className='w-20 max-lg:w-16 max-sm:w-12' src="instagram.svg" alt="instagram" />
          <p className='txt1 pt-4 max-sm:pt-2'>Instagram</p>
          <p className=''>@Bilscoffee</p>
        </motion.div>
        <motion.div
          initial='rest'
          whileHover='hover'
          animate='rest'
          variants={boxState}
          className='md:aspect-square md:w-72 py-8 cursor-pointer border-2 rounded-[2rem] md:rounded-[3rem] h-full flex flex-col justify-center items-center' 
          onClick={ () => window.open()}
        >
          <img className='w-20 max-lg:w-16 max-sm:w-12' src="email.svg" alt="instagram" />
          <p className='txt1 pt-4 max-sm:pt-2'>Email</p>
          <p className=''>Bilskopi@gmail.com</p>
        </motion.div>
        <motion.div
          initial='rest'
          whileHover='hover'
          animate='rest'
          variants={boxState}
          className='md:aspect-square md:w-72 py-8 cursor-pointer border-2 rounded-[2rem] md:rounded-[3rem] h-full flex flex-col justify-center items-center' 
          onClick={ () => window.open()}
        >
          <img className='w-20 max-lg:w-16 max-sm:w-12' src="facebook.svg" alt="instagram" />
          <p className='txt1 pt-4 max-sm:pt-2'>Facebook</p>
          <p className=''>Bil's Coffee</p>
        </motion.div>
        <motion.div
          initial='rest'
          whileHover='hover'
          animate='rest'
          variants={boxState}
          className='md:aspect-square md:w-72 py-8 cursor-pointer border-2 rounded-[2rem] md:rounded-[3rem] h-full flex flex-col justify-center items-center' 
          onClick={ () => window.open()}
        >
          <img className='w-20 max-lg:w-16 max-sm:w-12' src="whatsapp.svg" alt="instagram" />
          <p className='txt1 pt-4 max-sm:pt-2'>Whatsapp</p>
          <p className=''>+62Pick-An-Outlet</p>
        </motion.div>
      </div>
        {/* <div className='flex'>
          <div className='cursor-pointer hoverUnderline thickUnderline' onClick={ () => window.open()}>
            <p className='txt1 pb-1'>Email</p>
            <p className='Libre text-6xl max-xl:text-6xl max-lg:text-4xl max-md:text-5xl max-sm:text-4xl'>Bilskopi@gmail.com</p>
          </div>
        </div>
        <div className='flex'>
          <div className='cursor-pointer hoverUnderline thickUnderline' onClick={ () => window.open()}>
            <p className='txt1 pb-1'>Whatsapp</p>
            <p className='Libre text-6xl max-xl:text-6xl max-lg:text-4xl max-md:text-5xl max-sm:text-4xl'>08Pick-An-Outlet</p>
          </div>
        </div>
        <div className='flex'>
          <div className='cursor-pointer hoverUnderline thickUnderline' onClick={ () => window.open()}>
            <p className='txt1 pb-1'>Facebook</p>
            <p className='Libre text-6xl max-xl:text-6xl max-lg:text-4xl max-md:text-5xl max-sm:text-4xl'>Bil's&nbsp;Coffee</p>
          </div>
        </div> */}
  </div>
  )
}

export default Contacts