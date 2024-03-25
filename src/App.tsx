
import './App.css'
import Header from './sections/Header'
import Carousel from './sections/Carousel'
import Locations from './sections/Locations'
import Gofood from './sections/Gofood'
import Contacts from './sections/Contacts'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import OutletPopup from './components/OutletPopup'
import Footer from './sections/Footer'

function App() {
  
  const [modal, setModal] = useState(false);
  const [link, setLink] = useState(0);
  
  const toggleModal = (n: number) => {
    setLink(n);
    setModal(!modal);
  }

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
    <div className='bg-white relative z-[1]'>
      <AnimatePresence
        initial={false}
        onExitComplete={() => null}
      >
        {modal && (
          <OutletPopup toggleModal={toggleModal} link={link}/>
        )}
      </AnimatePresence>
      <Header toggleModalGo={() => toggleModal(0)} toggleModalMenu={() => toggleModal(1)} toggleModalWa={() => toggleModal(2)}/>
      <Carousel/>
      {/* <div className='h-96 w-full'></div>
      <Poster/> */}
      <div className='h-64 w-full'></div>
      <Locations/>
      <div className='h-64 w-full'></div>
      <Gofood toggleModalGo={() => toggleModal(0)}/>
      <div className='h-64 w-full'></div>
      <Contacts/>
      <div className='h-64 w-full'></div>
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
            </div>
          </> */}
      <p className='m-auto w-96'>
      Who was the first person to think making coffee from an animal's poop would be a great idea? That person is hella freaky if I may say so myself. And now, it's the most expensive kind of coffee. The world works in strange ways.
      </p>
      <div className='p-16 w-full'></div>
      <div className='h-16 w-full absolute rounded-b-full bg-white'></div>
    </div>
      <Footer/>
    </>
  )
}

export default App
