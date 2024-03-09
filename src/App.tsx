import poster from '/Poster.jpg'
import './App.css'
import Header from './sections/Header'
import Carousel from './sections/Carousel'

function App() {

  return (
    <>
    <div className='bg-white relative z-[1]'>
      <Header/>
      <Carousel/>
      <>
        <div className='w-full relative px-16'>
          <p className='txt1 absolute max-md:relative md:top-4 max-md:pb-4'>Grab our coffee</p>
          <p className='Libre tracking-[-.2rem] max-sm:text-5xl text-[10rem]'>
          <span className='max-md:hidden'>&emsp;&emsp;</span>Because life is too short for bad <span className='italic text-[#ad7953]'>coffee</span>.
          </p>
        </div>
        <div className='w-full px-16 pt-6 pb-16'>
          <div className='rounded-[2rem] overflow-hidden shad'>
            <img className=' w-full h-full object-cover' src={ poster } alt="poster" />
          </div>
        </div>
      </>
      <div className='h-16 w-full absolute rounded-b-full bg-white'></div>
    </div>
      <div className='h-[70dvh]'>
        <div className='h-[70dvh] w-full bg-black fixed bottom-0 z-0 p-16 pt-32 text-white'>
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
