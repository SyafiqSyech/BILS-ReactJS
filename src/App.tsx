import poster from '/Poster.jpg'
import './App.css'
import Header from './sections/Header'
import Carousel from './sections/Carousel'
import Button from './components/Button'
import { motion } from 'framer-motion'

function App() {

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
    <>
    <div className='bg-white relative z-[1]'>
      <Header/>
      <Carousel/>
      <>
        <div className='px-16 pt-64 max-md:px-8'>
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
            <div className='rounded-[2rem] overflow-hidden shad'>
              <img className=' w-full h-full object-cover' src={ poster } alt="poster" />
            </div>
          </div>
        </div>
      </>
      <>
        <div className='flex flex-wrap gap-x-8 max-md:gap-x-4 gap-y-8 max-sm:gap-y-8 justify-center px-16 max-md:px-8'>
          <p className='txt2 pt-64 w-full text-center'>Our Locations</p>
          <div className='w-[30rem] max-lg:w-[24rem] max-sm:w-full h-min flex flex-col gap-6 p-8 rounded-[3rem] border-2'>
            <div className='rounded-[2rem] max-sm:aspect-video overflow-hidden aspect-square'>
              <img className='w-full h-full object-cover' src='Carousel3.jpg' alt="poster" />
            </div>
            <p className='Libre text-5xl'>Cibis 9</p>
            <div>
              <p className='txt1'>Address</p>
              <p>
                Jl. Raya Cilandak KKO No.13, RT.13/RW.5, Cilandak Tim., Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12560
              </p>
              <p className='txt1 pt-4'>Open hours</p>
              <p>
                Monday to Friday, 8.00am–7.00pm
              </p>
            </div>
            <Button text={ 'Open Maps' } onClick={ () => window.open('https://maps.app.goo.gl/EZqvijVeLPvrXDgi9?g_st=ic') }/>
          </div>
          <div className='w-[30rem] max-lg:w-[24rem] max-sm:w-full h-min flex flex-col gap-6 p-8 rounded-[3rem] border-2'>
            <div className='rounded-[2rem] max-sm:aspect-video overflow-hidden aspect-square'>
              <img className='w-full h-full object-cover' src='Carousel2.jpg' alt="poster" />
            </div>
            <p className='Libre text-5xl'>Kemang</p>
            <div>
              <p className='txt1'>Address</p>
              <p>
                Jl. Benda Raya No.8a, RT.11/RW.4, Cilandak Tim., Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12560
              </p>
              <p className='txt1 pt-4'>Open hours</p>
              <p>
                Monday to Thursday, 7.30am–9.00pm<br/>Friday to Sunday, 7.00am–11.00pm
              </p>
            </div>
            <Button text={ 'Open Maps' } onClick={ () => window.open('https://maps.app.goo.gl/pw7AoNWmzR8qjbFy8?g_st=ic') }/>
          </div>
          <div className='w-[30rem] max-lg:w-[24rem] max-sm:w-full h-[50rem] max-sm:h-[20rem] flex justify-center items-center p-8 rounded-[3rem] border-2 bg-gray-200'>
            <p className='txt1 text-center'>More Coming Soon<br/><br/>Semoga</p>
          </div>
        </div>
      </>
      <div className='grid md:grid-cols-2 px-16 py-16 pt-64 max-md:px-8'>
        <p className='Libre text-7xl pb-12 md:hidden'>Contacts</p>
        <div className='w-full h-full pr-16 max-md:hidden'>
          <div className='w-full h-full px-20 max-lg:px-16 py-6 rounded-[3rem] flex md:justify-end items-end relative '>
            <p className='Libre text-5xl text-white z-10'>Contacts</p>
            <img className='w-full h-full rounded-[3rem] absolute top-0 left-0 object-cover shad' src='Carousel1.jpg' alt="poster" />
          </div>
        </div>
        <div className='flex flex-col gap-8 overflow-hidden'>
          <div className='cursor-pointer hoverUnderline thickUnderline w-min'>
            <p className='txt1 pb-1'>Instagram</p>
            <p className='Libre text-7xl max-xl:text-6xl max-lg:text-4xl max-md:text-5xl max-sm:text-4xl'>@Bilscoffee</p>
          </div>
          <div className='cursor-pointer hoverUnderline thickUnderline w-min'>
            <p className='txt1 pb-1'>Email</p>
            <p className='Libre text-7xl max-xl:text-6xl max-lg:text-4xl max-md:text-5xl max-sm:text-4xl'>Bilskopi@gmail.com</p>
          </div>
          <div className='cursor-pointer hoverUnderline thickUnderline w-min'>
            <p className='txt1 pb-1'>Facebook</p>
            <p className='Libre text-7xl max-xl:text-6xl max-lg:text-4xl max-md:text-5xl max-sm:text-4xl'>Bil's&nbsp;Coffee</p>
          </div>
        </div>  
      </div>
          {/* <div className='rounded-[2rem] overflow-hidden shad w-96 mb-24'>
            <img className=' w-full h-full object-cover' src={ poster } alt="poster" />
          </div> */}
      <div className='h-16 w-full absolute rounded-b-full bg-white'></div>
    </div>
      <div className='h-[70svh]'>
        <div className='h-[70svh] w-full bg-black fixed bottom-0 z-0 p-16 pt-32 text-white'>
          <div className='flex flex-wrap justify-center gap-6'>
            <p className='text-xl pt-4 cursor-pointer'>Home </p>
            <p className='text-xl pt-4 cursor-pointer'>About</p>
            <p className='text-xl pt-4 cursor-pointer'>Locations</p>
            {/* <p className='Libre text-xl pt-4 cursor-pointer'>Menu</p>
            <p className='Libre text-xl pt-4 cursor-pointer'>Go-Food</p>
            <p className='Libre text-xl pt-4 cursor-pointer'>Instagram</p>
            <p className='Libre text-xl pt-4 cursor-pointer'>Email</p>
            <p className='Libre text-xl pt-4 cursor-pointer'>Whatsapp</p>
            <p className='Libre text-xl pt-4 cursor-pointer'>Facebook</p> */}
          </div>
          {/* <p className='text-[16rem] tracking-[-.4rem] Libre text-white flex'>
            Say Hello
          </p> */}
          {/* <div className='bg-white w-16 h-16 mt-6 rounded-full flex justify-center items-center p-3'>
            <img className='' src={ bilsSmallLogo }/>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default App
