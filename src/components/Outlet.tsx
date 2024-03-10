import { motion } from 'framer-motion'

const Outlet = (props: {image: any, name: any, desc: any, onClick: any}) => {

  const descState = {
    rest: {
      color: '#000000',
      transition: {
        duration: .2,
      }
    },
    hover: {
      // color: '#ad7953',
      transition: {
        duration: .2,
      }
    }
  }

  const arrowState = {
    rest: {
      opacity: 0,
      rotate: '135deg',
      scale: 10,
      x: '-160%',
      y: '60%',
      transition: {
        duration: .2,
      }
    },
    hover: {
      opacity: 1,
      rotate: '135deg',
      scale: 10,
      x: '-50%',
      y: '-50%',
      transition: {
        duration: .2,
      }
    }
  }

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

  const imgState = {
    rest: {
      scale: 1,
      transition: {
        duration: .2,
      }
    },
    hover: {
      scale: 1.2,
      transition: {
        duration: .2,
      }
    }
  }

  return (
    <motion.div 
      initial='rest'
      whileHover='hover'
      animate='rest'
      onClick={ props.onClick }
    >
      <motion.div variants={boxState} className='w-96 max-lg:w-full cursor-pointer p-8 rounded-[3rem] border-2'>
        <div className='rounded-[2rem] overflow-hidden max-lg:aspect-video aspect-square w-full relative'>
          <motion.img variants={imgState} className='w-full h-full object-cover' src={ props.image } alt="poster" />
          <motion.span variants={arrowState} className="material-symbols-sharp text-white absolute top-1/2 left-1/2 text-[18px] mt-[-1px] w-min h-min">arrow_back</motion.span>
        </div>
        {/* <motion.p variants={descState} className='Libre text-4xl pt-4'>{ props.name }</motion.p> */}
        <motion.p variants={descState} className='Libre text-4xl pt-6'>{ props.name }</motion.p>
        <motion.p variants={descState} className='py-2 w-[95%]'>{ props.desc }</motion.p>
      </motion.div>
    </motion.div>
  )
}

export default Outlet