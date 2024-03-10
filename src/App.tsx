import poster from '/Poster.jpg'
import './App.css'
import Header from './sections/Header'
import Carousel from './sections/Carousel'
import Button from './components/Button'

function App() {

  return (
    <>
    <div className='bg-white relative z-[1]'>
      <Header/>
      <Carousel/>
      <>
        <div className='px-16 pt-64 max-sm:px-8'>
          <div className='w-full relative'>
            <p className='txt1 absolute max-lg:relative lg:top-4 max-lg:pb-4'>Grab our coffee</p>
            <p className='Libre tracking-[-.4rem] max-sm:text-7xl max-lg:text-9xl text-[9rem]'>
            <span className='max-lg:hidden'>&emsp;&emsp;</span>Because life is too short for bad <span className='italic text-[#ad7953]'>coffee</span>.
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
        <div className='flex flex-wrap gap-x-8 max-md:gap-x-4 gap-y-8 max-sm:gap-y-8 justify-center px-16'>
          <div className='w-[30rem] p-8 rounded-[3rem] border-2'>
            <div className='rounded-[2rem] overflow-hidden aspect-square'>
              <img className='w-full h-full object-cover' src='Carousel1.jpg' alt="poster" />
            </div>
            <div className='py-6'>
              <p className='Libre tracking-[-.1rem] text-6xl'>Cibis 9</p>
              <p className='txt1 pt-6'>Address</p>
              <p className=''>Jl. Raya Cilandak KKO No.13 - Cilandak Timur - Pasar Minggu - Jakarta Selatan</p>
              <p className='txt1 pt-2'>Open hours</p>
              <p className=''>Monday to Sunday, 12am-18pm</p>
            </div>
            <Button text={ 'Maps' } onClick={undefined}/>
          </div>
          <div className='w-[30rem] p-8 rounded-[3rem] border-2'>
            <div className='rounded-[2rem] overflow-hidden aspect-square'>
              <img className='w-full h-full object-cover' src='Carousel2.jpg' alt="poster" />
            </div>
            <div className='py-6'>
              <p className='Libre tracking-[-.1rem] text-6xl'>Kemang</p>
              <p className='txt1 pt-6'>Address</p>
              <p className=''>Jl. Benda Raya No.8a - Cilandak Timur - Pasar Minggu - Jakarta Selatan</p>
              <p className='txt1 pt-2'>Open hours</p>
              <p className=''>Monday to Sunday, 11am-10pm</p>
            </div>
            <Button text={ 'Maps' } onClick={undefined}/>
          </div>
        </div>
        <div className='grid lg:grid-cols-2 p-16 pt-64 max-sm:px-8'>
          <p>Contacts</p>
          <div className='flex flex-col gap-8 overflow-hidden'>
            <div>
              <p className='txt1 pb-1'>Instagram</p>
              <p className='Libre tracking-[-.05rem] text-7xl max-xl:text-5xl max-sm:text-3xl'>@Bilscoffee</p>
            </div>
            <div>
              <p className='txt1 pb-1'>Email</p>
              <p className='Libre tracking-[-.05rem] text-7xl max-xl:text-5xl max-sm:text-3xl'>Bilskopi@gmail.com</p>
            </div>
            <div>
              <p className='txt1 pb-1'>Facebook</p>
              <p className='Libre tracking-[-.05rem] text-7xl max-xl:text-5xl max-sm:text-3xl'>Bil's Coffee</p>
            </div>
            {/* <p className='Libre text-7xl'>Contact</p> */}
          </div>  
          {/* <div className='rounded-[2rem] overflow-hidden shad w-96 mb-24'>
            <img className=' w-full h-full object-cover' src={ poster } alt="poster" />
          </div> */}
        </div>
      </>
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
