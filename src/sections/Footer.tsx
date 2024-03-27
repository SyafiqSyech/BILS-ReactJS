import { motion } from 'framer-motion'

const Footer = (props: { toggleModalGo: any, toggleModalMenu: any }) => {
  return (
    <>
      {/* <div className='bg-black px-16 pt-24 pb-16 max-md:pt-24'> */}
      <div className='bg-black pt-32 pb-16 max-md:pt-28'>
        {/* <div className='w-[50vw] aspect-[827/436] md:hidden'></div> */}
        <div className='w-[22vw] max-md:w-[50vw] aspect-[827/436]'></div>
        <div className='w-[30vw] -mt-[2vw] max-md:w-[50vw] aspect-[827/436]'></div>
        <div className='h-[22.75px] max-lg:h-[113.75px] max-sm:h-[149.5px]'></div>
      </div>
      <div className='h-auto max-sm:h-auto w-full bg-black fixed bottom-0 z-0 max-lg:pb-4 text-white flex flex-col gap-24 justify-between items-center'>
        <div className='w-full overflow-hidden lg:-mb-6 pt-16'>
          <motion.div 
            initial={{ x: '-20%' }}
            animate={{ x: 0 }}
            transition={{ duration: 5, ease: 'linear', repeat: Infinity}}
            className='flex w-max md:hidden'
          >
            <img className='w-[30vw] max-md:w-[50vw] object-contain object-bottom' src='BilsCoffeeLogo2White.png'/>
            <img className='w-[30vw] max-md:w-[50vw] object-contain object-bottom' src='BilsCoffeeLogo2White.png'/>
            <img className='w-[30vw] max-md:w-[50vw] object-contain object-bottom' src='BilsCoffeeLogo2White.png'/>
            <img className='w-[30vw] max-md:w-[50vw] object-contain object-bottom' src='BilsCoffeeLogo2White.png'/>
            <img className='w-[30vw] max-md:w-[50vw] object-contain object-bottom' src='BilsCoffeeLogo2White.png'/>
          </motion.div>
          <motion.div 
            initial={{ x: 0 }}
            animate={{ x: '-20%' }}
            transition={{ duration: 5, ease: 'linear', repeat: Infinity}}
            className='flex w-max max-md:-mt-[2vw]'
          >
            <img className='w-[30vw] max-md:w-[50vw] object-contain object-bottom' src='BilsCoffeeLogo2White.png'/>
            <img className='w-[30vw] max-md:w-[50vw] object-contain object-bottom' src='BilsCoffeeLogo2White.png'/>
            <img className='w-[30vw] max-md:w-[50vw] object-contain object-bottom' src='BilsCoffeeLogo2White.png'/>
            <img className='w-[30vw] max-md:w-[50vw] object-contain object-bottom' src='BilsCoffeeLogo2White.png'/>
            <img className='w-[30vw] max-md:w-[50vw] object-contain object-bottom' src='BilsCoffeeLogo2White.png'/>
          </motion.div>
          <motion.div 
            initial={{ x: '-20%' }}
            animate={{ x: 0 }}
            transition={{ duration: 5, ease: 'linear', repeat: Infinity}}
            className='flex w-max -mt-[2vw]'
          >
            <img className='w-[30vw] max-md:w-[50vw] object-contain object-bottom' src='BilsCoffeeLogo2White.png'/>
            <img className='w-[30vw] max-md:w-[50vw] object-contain object-bottom' src='BilsCoffeeLogo2White.png'/>
            <img className='w-[30vw] max-md:w-[50vw] object-contain object-bottom' src='BilsCoffeeLogo2White.png'/>
            <img className='w-[30vw] max-md:w-[50vw] object-contain object-bottom' src='BilsCoffeeLogo2White.png'/>
            <img className='w-[30vw] max-md:w-[50vw] object-contain object-bottom' src='BilsCoffeeLogo2White.png'/>
          </motion.div>
        </div>
        <div className='max-w-[92rem] px-16 max-md:px-8 mx-auto mb-16 max-lg:mb-8 lg:grid grid-cols-[1fr_5fr_1fr] w-full'>
          <div className='flex gap-8 max-lg:hidden items-end'>
            <p className='text-sm'>Bil's Coffee</p>
          </div>
          <div className='flex max-sm:flex-col gap-12 max-sm:gap-4 justify-center'>
            <div className='flex gap-12 justify-center'>
              <p className='cursor-pointer hoverUnderline text-center text-xl' onClick={ () => window.location.href = '/#' }>Home</p>
              <p className='cursor-pointer hoverUnderline text-center text-xl' onClick={ () => window.location.href = '/#locations' }>Locations</p>
              <p className='cursor-pointer hoverUnderline text-center text-xl' onClick={ () => window.location.href = '/#contacts' }>Contacts</p>
            </div>
            <div className='flex gap-12 justify-center'>
              <p className='cursor-pointer hoverUnderline text-center text-xl' onClick={ props.toggleModalGo }>Go-Food</p>
              <p className='cursor-pointer hoverUnderline text-center text-xl' onClick={ props.toggleModalMenu }>Menu</p>
            </div>
          </div>
          <div className='flex gap-8 justify-end max-lg:justify-center items-end max-lg:pt-24'>
            <p className='text-sm max-lg:text-xs cursor-pointer hoverUnderline'>Made by Syaf</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer