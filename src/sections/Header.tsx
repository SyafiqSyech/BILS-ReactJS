import { useState } from 'react';
import Button from '../components/Button'
import bilsLogo from '/BilsCoffeeLogo1.png'
import { AnimatePresence, motion } from 'framer-motion';
import OutletPopup from '../components/OutletPopup';

const Header = () => {

  const [modal, setModal] = useState(false);
  const [link, setLink] = useState(0);
  const [rnd, setRnd] = useState(0);
  const [what, setWhat] = useState(false);

  const toggleModal = (n: number) => {
    setLink(n);
    setModal(!modal);
  }

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  
  var rotateLogoAnimation = {
    rotate: rnd.toString()+'deg',
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
    }
  }

  const rotateLogo = () => {
    var max = 140;
    var min = -140;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    var newRnd = rnd > 500 && random > 0 || rnd < -500 && random < 0 ? rnd - random : rnd + random;
    var newnewRnd = newRnd < rnd ? newRnd - 40 : newRnd + 40;
    console.log(rnd)
    console.log(newRnd)
    console.log(newnewRnd)
    setRnd(newnewRnd);
    console.log(what)
    setWhat(true);
  }

  return (
    <>
      <AnimatePresence
        initial={false}
        onExitComplete={() => null}
      >
        {modal && (
          <OutletPopup toggleModal={ toggleModal } link={ link }/>
        )}
      </AnimatePresence>
      <div className='flex flex-col items-center justify-center min-h-[70svh] max-sm:h-auto max-md:min-h-[80svh] py-20 max-md:py-16 w-full gap-12 relative'>
        <motion.img
          initial={ rotateLogoAnimation }
          animate={ rotateLogoAnimation }
          onClick={ rotateLogo }
          className='h-96 max-sm:h-64'
          src={ bilsLogo }
        />
        {what && (
          <p id='angry' className='absolute top-1/2 -translate-y-72 max-sm:-translate-y-[19.5rem]'>WHAT HAVE YOU DONE !!!!</p>
        )}
        <div className='flex gap-8 max-sm:gap-4 max-sm:flex-col flex-row w-full justify-center'>
          <div className='flex justify-center'><Button text='Go-Food' onClick={ () => toggleModal(0) }/></div>
          <div className='flex justify-center'><Button text='Instagram' onClick={ () => window.open('https://www.instagram.com/bilscoffee/?hl=en')}/></div>
          <div className='flex justify-center'><Button text='Menu' onClick={ () => toggleModal(1) }/></div>
          <div className='flex justify-center'><Button text='Contacts' onClick={ false }/></div>
          {/* <Button text='Location' link={undefined}/> */}
          {/* <Button text='Contacts' link={undefined}/> */}
        </div>
      </div>
    </>
  )
}

export default Header