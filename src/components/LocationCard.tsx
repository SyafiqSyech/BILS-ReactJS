import { motion } from 'framer-motion'
import Button from './Button'

const LocationCard = (props: {image: any, name: any, address: any, hours: any, whatsapp: { number: any, onClick: any }, mapsClick: any}) => {

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
      filter: 'blur(0px)',
      transition: {
        duration: .2,
      }
    },
    hover: {
      scale: 1.1,
      filter: 'blur(3px)',
      transition: {
        duration: .2,
      }
    }
  }

  return (
    <div className='w-[30rem] max-lg:w-[24rem] max-md:w-full max-md:max-w-[32rem] h-min flex flex-col gap-6 p-8 rounded-[3rem] border-2'>
      <motion.div
        initial='rest'
        whileHover='hover'
        animate='rest'
        className='rounded-[2rem] overflow-hidden aspect-square relative cursor-pointer select-none'
        onClick={ props.mapsClick }
      >
        <motion.img
          variants={ imgState }
          src={ props.image }
          alt="poster" 
        />
        <motion.span variants={arrowState} className="material-symbols-sharp text-white absolute top-1/2 left-1/2">arrow_back</motion.span>
      </motion.div>
      <p className='Libre text-5xl'>{ props.name }</p>
      <div>
        <p className='txt1'>Address</p>
        <p>{ props.address }</p>
        <p className='txt1 pt-4'>Whatsapp</p>
        <div className='flex'>
          <p className='hoverUnderline cursor-pointer' onClick={ props.whatsapp.onClick }>{ props.whatsapp.number }</p>
        </div>
        <p className='txt1 pt-4'>Hours</p>
        <p>{ props.hours }</p>
      </div>
      <Button text={ 'open Map' } onClick={ props.mapsClick }/>
    </div>
  )
}

export default LocationCard