import { useState } from 'react';
import Button from '../components/Button'
import bilsLogo from '/BilsCoffeeLogo1.png'
import { AnimatePresence } from 'framer-motion';
import OutletPopup from '../components/OutletPopup';

const Header = () => {

  const [modal, setModal] = useState(false);
  const [link, setLink] = useState(0);

  const toggleModal = (n: number) => {
    setLink(n);
    setModal(!modal);
  }

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
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
      <div className='flex flex-col items-center justify-center min-h-[70dvh] max-sm:h-auto max-md:min-h-[80dvh] py-20 max-md:py-16 w-full gap-12 '>
        <img className='h-96 max-sm:h-64' src={ bilsLogo }/>
        <div className='flex gap-8 max-sm:gap-4 max-sm:flex-col flex-row w-full justify-center'>
          <Button text='Go-Food' link={undefined} toggleModal={ () => toggleModal(0) }/>
          <Button text='Instagram' link={undefined} toggleModal={ () => window.open('https://www.instagram.com/bilscoffee/?hl=en')}/>
          <Button text='Menu' link={undefined} toggleModal={ () => toggleModal(1) }/>
          <Button text='Contacts' link={undefined} toggleModal={ false }/>
          {/* <Button text='Location' link={undefined}/> */}
          {/* <Button text='Contacts' link={undefined}/> */}
        </div>
      </div>
    </>
  )
}

export default Header