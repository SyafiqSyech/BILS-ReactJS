import { motion } from 'framer-motion'

const Carousel = () => {

  const carousel = [
    'Carousel1.jpg',
    'Carousel2.jpg',
    'Carousel3.jpg',
    'Carousel4.jpg',
    'Carousel5.jpg',
  ]
  
  return (
    <div className='w-full overflow-hidden pt-10 -mt-10'>
        <motion.div 
          animate={{ x: 'calc(-50%)' }}
          transition={{ duration: 40, ease: 'linear', repeat: Infinity }}        
          className='flex gap-12 max-md:gap-8 justify-between w-max px-6 max-md:px-2'
        >
          {carousel.map((c, i) => (
            <div className='rounded-[2rem] overflow-hidden w-[max(25vw,40svh)] max-lg:w-[max(25vw,30svh)] aspect-square shad' key={i}>
              <img className=' w-full h-full object-cover' src={ c } alt="poster" />
            </div>
          ))}
          {carousel.map((c, i) => (
            <div className='rounded-[2rem] overflow-hidden w-[max(25vw,40svh)] max-lg:w-[max(25vw,30svh)] aspect-square shad' key={i}>
              <img className=' w-full h-full object-cover' src={ c } alt="poster" />
            </div>
          ))}
        </motion.div>
        <div className='max-w-[92rem] px-16 max-md:px-8 mx-auto pt-8'>
          <p className='w-full text-end max-sm:text-center'>Posts from our&nbsp;<span className='hoverUnderline cursor-pointer' onClick={ () => window.open('https://www.instagram.com/bilscoffee/?hl=en') }>instagram</span></p>
        </div>
      </div>
  )
}

export default Carousel