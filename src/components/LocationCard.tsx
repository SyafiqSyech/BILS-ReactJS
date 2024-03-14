import { motion } from 'framer-motion'
import Button from './Button'

const LocationCard = (props: {image: any, name: any, address: any, hours: any, whatsapp: { number: any, onClick: any }, mapsClick: any}) => {

  const imgState = {
    rest: {
      scale: 1,
      transition: {
        duration: .2,
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: .2,
      }
    }
  }

  return (
    <div className='w-[30rem] max-lg:w-[24rem] max-md:w-full max-md:max-w-[32rem] h-min flex flex-col gap-6 p-8 rounded-[3rem] border-2'>
      <div className='rounded-[2rem] max-md:aspect-video overflow-hidden aspect-square'>
        <motion.img
          initial='rest'
          whileHover='hover'
          animate='rest'
          variants={ imgState }
          src={ props.image } 
          alt="poster" 
        />
      </div>
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