import { useState } from 'react';
import Button from '../components/Button'
import bilsLogo from '/BilsCoffeeLogo1.png'
import { motion } from 'framer-motion';

const Header = (props: { toggleModalGo: any, toggleModalMenu: any, toggleModalWa: any}) => {

  const [rnd, setRnd] = useState(0);

  var rotateLogoAnimation = {
    rotate: rnd.toString() + 'deg',
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
    setRnd(newnewRnd);
  }

  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-[90svh] gap-12 py-20 w-full relative'>
        <motion.img
          initial={rotateLogoAnimation}
          animate={rotateLogoAnimation}
          onClick={rotateLogo}
          className='h-96 max-sm:h-64'
          src={bilsLogo}
        />
        <div className='flex gap-8 max-lg:gap-4 max-lg:flex-col flex-row w-full justify-center'>
          <div className='flex justify-center'>
            <Button text='Go-Food' onClick={ props.toggleModalGo } />
          </div>
          <div className='flex justify-center'>
            <Button text='Locations' onClick={() => window.location.href = '/#locations'} />
          </div>
          <div className='flex justify-center'>
            <Button text='Menu' onClick={ props.toggleModalMenu } />
          </div>
          <div className='flex justify-center'>
            <Button text='Contacts' onClick={() => window.location.href = '/#contacts'} />
          </div>
        </div>
        <div className='grid grid-cols-4 gap-4'>
          <div 
            className='p-3 -my-3 aspect-square rounded-full items-center cursor-pointer bg-white hover:bg-gray-200 transition-[.2]'
            onClick={ () => window.open('https://www.instagram.com/bilscoffee/?hl=en') }
          >
            <img className='w-7 max-lg:w-8' src="instagram.svg" alt="instagram" />
          </div>
          <div 
            className='p-3 -my-3 aspect-square rounded-full items-center cursor-pointer bg-white hover:bg-gray-200 transition-[.2]'
            onClick={ () => window.location.replace('mailto:bilskopi@gmail.com') }
          >
            <img className='w-7 max-lg:w-8' src="email.svg" alt="email" />
          </div>
          <div 
            className='p-3 -my-3 aspect-square rounded-full items-center cursor-pointer bg-white hover:bg-gray-200 transition-[.2]'
            onClick={ () => window.open('https://www.facebook.com/bilscoffee/') }
          >
            <img className='w-7 max-lg:w-8' src="facebook.svg" alt="facebook" />
          </div>
          <div 
            className='p-3 -my-3 aspect-square rounded-full items-center cursor-pointer bg-white hover:bg-gray-200 transition-[.2]'
            onClick={ props.toggleModalWa }
          >
            <img className='w-7 max-lg:w-8' src="whatsapp.svg" alt="whatsapp" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header