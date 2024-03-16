import { motion } from 'framer-motion'
import poster from '/Poster1.jpg'

const Poster = () => {
  
  const gojekState = {
    rest: {
      opacity: 0,
      y: -10,
      transition: {
        duration: .2,
      }
    },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .2,
      }
    }
  }

  return (
    <div className='px-16 max-md:px-8'>
      <div className='w-full relative'>
        <p className='txt2 absolute max-lg:relative lg:top-4 max-lg:pb-4'>
          <motion.span 
            initial='rest'
            whileHover='hover'
            animate='rest'
            className='hoverUnderline thickUnderline cursor-pointer'
          >
            <motion.p variants={ gojekState } className='absolute right-0 -top-10 small leading-snug'>*gojek<br/>&emsp;v</motion.p>
            Grab
          </motion.span>
          &nbsp;our coffee
        </p>
        <p className='Libre max-sm:text-7xl max-lg:text-8xl text-[9rem]'>
          <span className='max-lg:hidden'>&emsp;&emsp;&emsp;</span>Because life is too short for bad <span className='italic text-[#ad7953]'>coffee</span>.
        </p>
      </div>
      <div className='w-full pt-8 pb-16'>
        <img className=' w-full h-full object-cover rounded-[2rem] shad' src={ poster } alt="poster" />
      </div>
    </div>
  )
}

export default Poster