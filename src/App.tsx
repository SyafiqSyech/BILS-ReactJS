
import './App.css'
import Header from './sections/Header'
import Carousel from './sections/Carousel'
import Poster from './sections/Poster'
import Locations from './sections/Locations'
import Gofood from './sections/Gofood'
import Contacts from './sections/Contacts'

function App() {

  return (
    <>
    <div className='bg-white relative z-[1]'>
      <Header/>
      <Carousel/>
      <Poster/>
        {/* <div className='px-16 py-16 pt-64 max-md:px-8'>
          
          <div className='flex pt-64'>
            <img className='rounded-[2rem] object-cover w-1/2 aspect-square shad' src='Carousel3.jpg' alt="poster" />
            <p>a</p>
          </div>
        </div> */}
      {/* <>
        <div className='px-16 py-16 pt-64 max-md:px-8'>
          <div className='-mb-[max(15vw,20svh)] flex justify-start'>
            <img className='rounded-[2rem] object-cover w-[max(40vw,50svh)] aspect-square shad' src='Carousel2.jpg' alt="poster" />
          </div>
          <div className='-mb-[max(15vw,20svh)] flex justify-end'>
            <img className='rounded-[2rem] object-cover w-[max(40vw,50svh)] aspect-square shad' src='Carousel1.jpg' alt="poster" />
          </div>
          <div className='-mb-[max(15vw,20svh)] flex justify-start'>
            <img className='rounded-[2rem] object-cover w-[max(40vw,50svh)] aspect-square shad' src='Carousel4.jpg' alt="poster" />
          </div>
          <div className='-mb-[max(15vw,20svh)] flex justify-end'>
            <img className='rounded-[2rem] object-cover w-[max(40vw,50svh)] aspect-square shad' src='Carousel3.jpg' alt="poster" />
          </div>
          <p className='w-96'>
            Who was the first person to think making coffee from an animal's poop would be a great idea? That person is hella freaky if I may say so myself. And now, it's the most expensive kind of coffee. The world works in strange ways.
          </p>
        </div>
      </> */}
      <Locations/>
      <Gofood/>
      <Contacts/>
          {/* <div className='rounded-[2rem] overflow-hidden shad w-96 mb-24'>
            <img className=' w-full h-full object-cover' src={ poster } alt="poster" />
          </div> */}
      <div className='h-16 w-full absolute rounded-b-full bg-white'></div>
    </div>
      <div className='h-[40svh]'>
        <div className='h-[40svh] w-full bg-black fixed bottom-0 z-0 p-16 pt-32 text-white'>
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
