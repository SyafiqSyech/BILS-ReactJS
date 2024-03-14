import Button from '../components/Button'
import { motion } from 'framer-motion'

const Gofood = () => {

  const textState = {
    rest: {
      y: '-400%',
      opacity: 1,
      transition: {
        duration: .3,
      }
    },
    hover: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: .2,
      }
    }
  }

  const imgState = {
    rest: {
      scale: 1,
      transition: {
        duration:.1
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        bounce:.7,
        duration:1
      }
    }
  }

  return (
    <div className='grid grid-cols-2 max-md:flex max-md:flex-col px-16 py-16 pt-64 max-md:px-8'>
      <div className='md:pr-16 flex flex-col justify-center gap-16 max-lg:gap-12 max-md:gap-8'>
        {/* <p className='w-96'>
          Who was the first person to think making coffee from an animal's poop would be a great idea? That person is freaky if I do say so myself. And now that kind of coffee is one of the most expensive kind. The world <span className='italic text-[#ad7953]'>brews</span> in strange ways.
        </p> */}
        {/* <p className='txt2'>Lorem Ipsum Dolor</p> */}
        <p className='Libre text-9xl max-xl:text-8xl max-lg:text-7xl max-md:text-8xl max-sm:text-7xl'>Sip and savor our <span className='italic text-[#ad7953]'>coffee</span> on the&nbsp;go.</p>
        <div className='flex items-center gap-2 max-md:hidden'>
          <p className='txt1'>make a</p>
          <Button text='Go-Food' onClick={ undefined }/>
          <p className='txt1'>order ?</p>
        </div>
      </div>
      <motion.div
        initial='rest'
        whileHover='hover'
        animate='rest'
        className='relative max-md:pt-8 flex justify-end' 
      >
        <motion.p
          variants={ textState }
          className='absolute !bg-transparent text-center w-full -bottom-14 z-[1] max-md:hidden'
        >
          Take out and take off!
        </motion.p>
        <motion.img 
          variants={ imgState }
          className='rounded-[2rem] max-h-[50rem] max-md:max-h-[20rem] h-full max-md:w-3/4 shad object-right object-cover relative z-[2]' 
          src='Pilot.jpg' 
          alt="pilot"
        />
      </motion.div>
      <div className='flex items-center gap-2 w-full pt-10 md:hidden'>
        <p className='txt1'>make a</p>
        <Button text='Go-Food' onClick={ undefined }/>
        <p className='txt1'>order ?</p>
      </div>
    </div>
  )
}

export default Gofood