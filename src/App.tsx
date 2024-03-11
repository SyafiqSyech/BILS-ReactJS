
import './App.css'
import Header from './sections/Header'
import Carousel from './sections/Carousel'
import Poster from './sections/Poster'
import Locations from './sections/Locations'

function App() {

  return (
    <>
    <div className='bg-white relative z-[1]'>
      <Header/>
      <Carousel/>
      <Poster/>
      <Locations/>
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
