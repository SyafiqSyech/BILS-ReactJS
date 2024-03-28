
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
import Button from './components/Button'

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
        <Contacts toggleModalWa={() => toggleModal(2)}/>
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
        <div className='max-w-[50rem] px-16 max-md:px-8 mx-auto pt-8'>
          <p className='Libre text-8xl max-sm:text-6xl pb-8'>
            About Bil's
          </p>
          <p className=''>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className='p-16 w-full z-[2] relative bg-white'></div>
        <div className='h-16 w-full absolute rounded-b-full bg-white shad translate-y-[-1px]'></div>
      </div>
      <Footer toggleModalGo={() => toggleModal(0)} toggleModalMenu={() => toggleModal(1)}/>
    </>
  )
}

export default App
