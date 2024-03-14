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
    <div className='flex justify-between px-16 py-16 pt-64 max-md:px-8'>
      <div className='w-1/2 pr-16 flex flex-col justify-between gap-16'>
        {/* <p className='w-96'>
          Who was the first person to think making coffee from an animal's poop would be a great idea? That person is freaky if I do say so myself. And now that kind of coffee is one of the most expensive kind. The world <span className='italic text-[#ad7953]'>brews</span> in strange ways.
        </p> */}
        {/* <p className='txt2'>Lorem Ipsum Dolor</p> */}
        <p className='Libre text-9xl pb-8'>Sip and savor our <span className='italic text-[#ad7953]'>coffee</span> on the go.</p>
        <div className='flex items-center gap-2'>
          <p className='txt1'>order on</p>
          <Button text='Go-Food' onClick={ undefined }/>
          <p className='txt1'>now !</p>
        </div>
      </div>
      <motion.div
        initial='rest'
        whileHover='hover'
        animate='rest'
        className='w-1/2 relative' 
      >
        <motion.p
          variants={ textState }
          className='absolute !bg-transparent text-center w-full -bottom-14 z-[1]'
        >
          Take out and take off!
        </motion.p>
        <motion.img 
          variants={ imgState }
          className='rounded-[2rem] shad object-right object-cover relative z-[2]' 
          src='Pilot.jpg' 
          alt="pilot"
        />
      </motion.div>
    </div>
  )
}

export default Gofood