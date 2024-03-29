import { motion } from 'framer-motion'
import Outlet from './Outlet'

const OutletPopup = (props: {toggleModal: any, link: any}) => {

  const kemang = [
    /*gofood   */ 'https://gofood.link/a/F6W8b8f',
    /*menu     */ 'https://drive.google.com/file/d/1sV0z_NEPfEKf_3HuKugo7NfbhQnsH3X1/view?usp=sharing',
    /*menu     */ 'https://wa.me/+6287789083706',
  ]

  const cibis = [
    /*gofood   */ 'https://gofood.link/u/GGqjd',
    /*menu     */ 'https://drive.google.com/file/d/1c1PZNGjfh61WQmXRuFVqc0iz4Gt8KmJx/view?usp=sharing',
    /*menu     */ 'https://wa.me/+6281317436103',
  ]

  return (
    <div className='fixed top-0 left-0 w-full h-[100svh] z-50 overflow-y-scroll'>
      <div aria-hidden className='p-16 max-md:p-8 flex justify-center items-center relative min-h-[100svh]'>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: .3 }}
          exit={{ opacity: 0 }}
          transition={{ type: 'ease', duration: .3 }}
          onClick={ props.toggleModal } 
          className='absolute top-0 left-0 w-full min-h-lvh h-full bg-black'
        ></motion.div>
        <motion.div
          initial={{ scale: .8, opacity:0 }}
          animate={{ scale: 1, opacity:1, transition: { type: 'spring', damping: 25, stiffness: 500 } }}
          exit={{ scale: .8, opacity:0, transition: { ease: 'easeOut', duration:.1} }}
          className='max-w-[88rem] min-h-96 bg-white rounded-[4rem] relative p-16 max-lg:p-8 max-sm:pt-16'
        >
          <span className="material-symbols-outlined absolute cursor-pointer right-10 top-10 select-none" onClick={ props.toggleModal }>close</span>
          <p className='txt1 text-center pb-16 max-lg:pt-8 max-md:pb-8 max-sm:pt-0'>Pick a location</p>
          <div className=''>
            <div className='flex flex-wrap gap-x-8 max-md:gap-x-4 gap-y-16 max-sm:gap-y-8 justify-center'>
              <Outlet image={'Cibis2.jpg'} name={'Cibis9'} desc={'Jl. Raya Cilandak KKO No.13 - Cilandak Timur - Pasar Minggu - Jakarta Selatan'} onClick={ () => window.open(cibis[props.link]) }/>
              <Outlet image={'Kemang4.jpg'} name={'Kemang'} desc={'Jl. Benda Raya No.8a - Cilandak Timur - Pasar Minggu - Jakarta Selatan'} onClick={ () => window.open(kemang[props.link]) }/>
              {/* <Outlet image={'Carousel4.jpg'} name={'Bangka'} desc={'Jl. Bangka V No.7 - Cilandak Timur - Pasar Minggu - Jakarta Selatan'} onClick={ () => window.open(kemang[props.link]) }/> */}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default OutletPopup