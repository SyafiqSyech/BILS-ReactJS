import { motion } from 'framer-motion'

const Button = (props: {text: any, onClick: any}) => {

  const textState = {
    rest: {
      color: "#000000",
      transition: {
        duration: .2,
      }
    },
    hover: {
      color: "#FFFFFF",
      transition: {
        duration: .2,
      }
    }
  }

  const bgState = {
    rest: {
      y: '103%',
      transition: {
        duration: .2,
      }
    },
    hover: {
      y: 0,
      transition: {
        duration: .2,
      }
    }
  }

  const arrowState = {
    rest: {
      rotate: 180,
      color: "#000000",
      transition: {
        duration: .2,
      }
    },
    hover: {
      rotate: 135,
      color: "#FFFFFF",
      transition: {
        duration: .2,
      }
    }
  }

  const boxState = {
    rest: {
      gap: ".5rem",
      transition: {
        type: 'spring',
        bounce: .5,
        duration: .5,
      }
    },
    hover: {
      gap: "3rem",
      transition: {
        type: 'spring',
        bounce: .5,
        duration: .5,
      }
    }
  }

  return (
    <>
      <div className='flex h-min'>
        <motion.div
          initial='rest'
          whileHover="hover"
          animate="rest"
          onClick={ props.onClick  }
          className='rounded-full relative overflow-hidden cursor-pointer'
        >
          <motion.div variants={boxState} className='flex justify-center py-3 px-6 text-center border-2 rounded-full'>
            <motion.p variants={textState} className='txt1 z-[2]'>{props.text}</motion.p>
            <motion.span variants={arrowState} className="material-symbols-sharp text-[18px] mt-[-1px] z-[2]">arrow_back</motion.span>
          </motion.div>
          <motion.div variants={bgState} className='h-full w-full rounded-full absolute top-0 left-0 bg-black z-1'></motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default Button