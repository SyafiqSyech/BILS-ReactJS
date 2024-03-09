import { motion } from 'framer-motion'

const OutletPopup = (props: {toggleModal: any, link: any}) => {

  const descState = {
    rest: {
      color: '#000000',
      transition: {
        duration: .2,
      }
    },
    hover: {
      color: '#ad7953',
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

  const imgState = {
    rest: {
      scale: 1,
      boxShadow: 'rgba(0, 0, 0, .2) 0px 20px 30px',
      transition: {
        duration: .2,
      }
    },
    hover: {
      scale: 1.2,
      boxShadow: 'rgba(0, 0, 0, 0) 0px 20px 30px',
      transition: {
        duration: .2,
      }
    }
  }

  const kemang = [
    /*gofood   */ 'https://gofood.link/a/F6W8b8f',
    /*menu     */ 'https://drive.google.com/file/d/1sV0z_NEPfEKf_3HuKugo7NfbhQnsH3X1/view?usp=sharing',
  ]

  const cibis = [
    /*gofood   */ 'https://gofood.link/u/GGqjd',
    /*menu     */ 'https://drive.google.com/file/d/1c1PZNGjfh61WQmXRuFVqc0iz4Gt8KmJx/view?usp=sharing',
  ]

  return (
    <div className='fixed top-0 left-0 w-full h-[100dvh] z-50 overflow-y-scroll'>
      <div aria-hidden className='p-4 flex justify-center items-center relative min-h-[100dvh]'>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: .75 }}
          exit={{ opacity: 0 }}
          transition={{ type: 'ease', duration: .3 }}
          onClick={ props.toggleModal } 
          className='bg-black absolute top-0 left-0 w-full h-full'
        ></motion.div>
        <motion.div
          initial={{ scale: .8, opacity:0 }}
          animate={{ scale: 1, opacity:1, transition: { type: 'spring', damping: 25, stiffness: 500 } }}
          exit={{ scale: .8, opacity:0, transition: { ease: 'easeOut', duration:.1} }}
          className='max-w-[88rem] w-auto min-h-96 bg-white rounded-[3rem] relative p-16 max-sm:px-4'
        >
          <span className="material-symbols-outlined absolute cursor-pointer right-10 top-10" onClick={ props.toggleModal }>close</span>
          <p className='txt1 text-center pb-16 max-sm:pb-10'>Pick an outlet</p>
          <div className='flex flex-wrap gap-x-8 max-md:gap-x-4 gap-y-16 max-sm:gap-y-10 justify-center'>
            <motion.div 
              initial='rest'
              whileHover='hover'
              animate='rest'
              onClick={() => window.open(kemang[props.link])}
              className='w-96 max-lg:w-full cursor-pointer'
            >
              <div className='rounded-[2rem] overflow-hidden aspect-square max-lg:aspect-auto max-lg:h-64 relative'>
                <motion.img variants={imgState} className='w-full h-full object-cover' src="Carousel3.jpg" alt="poster" />
                <motion.span variants={arrowState} className="material-symbols-sharp text-white absolute top-1/2 left-1/2 text-[18px] mt-[-1px] w-min h-min">arrow_back</motion.span>
              </div>
              <motion.p variants={descState} className='Libre text-3xl pt-4'>Kemang</motion.p>
              <motion.p variants={descState} className='pt-2 w-[95%]'>Jl. Benda Raya No.8a - Cilandak Timur - Pasar Minggu - Jakarta Selatan</motion.p>
            </motion.div>
            <motion.div 
              initial='rest'
              whileHover='hover'
              animate='rest'
              onClick={() => window.open(cibis[props.link])}
              className='w-96 max-lg:w-full cursor-pointer'
            >
              <div className='rounded-[2rem] overflow-hidden aspect-square max-lg:aspect-auto max-lg:h-64 relative'>
                <motion.img variants={imgState} className='w-full h-full object-cover' src="Carousel1.jpg" alt="poster" />
                <motion.span variants={arrowState} className="material-symbols-sharp text-white absolute top-1/2 left-1/2 text-[18px] mt-[-1px] w-min h-min">arrow_back</motion.span>
              </div>
              <motion.p variants={descState} className='Libre text-3xl pt-4'>Cibis9</motion.p>
              <motion.p variants={descState} className='pt-2 w-[95%]'>Jl. Raya Cilandak KKO No.13 - Cilandak Timur - Pasar Minggu - Jakarta Selatan</motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default OutletPopup