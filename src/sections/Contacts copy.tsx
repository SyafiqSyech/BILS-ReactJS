import React from 'react'

const Contacts = () => {
  return (
    <div className='px-16 py-16 pt-64 max-md:px-8'>
    <p className='txt2 text-center pb-12 '>Contacts</p>
    <div className='border-2 rounded-[4rem] p-16 w-full flex h-min'>
      <div className='w-1/2 max-md:hidden rounded-[2rem] relative'>
      {/* <p className='Libre text-8xl text-[#ad7953] italic'>Get In Touch</p> */}
        <img className='w-full h-full absolute rounded-[2rem] object-cover shad' src='Carousel3.jpg' alt="poster" />
      </div>
      {/* <div className='w-full h-full pr-16 max-md:hidden'>
        <div className='w-full h-full px-20 max-lg:px-16 py-6 rounded-[3rem] flex md:justify-end items-end relative '>
          <p className='Libre text-5xl text-white z-10'>Contacts</p>
        </div>
      </div> */}
      <div className='flex flex-col gap-8 overflow-hidden ml-16 w-1/2 h-min'>
        <div className='flex'>
          <div className='cursor-pointer hoverUnderline thickUnderline' onClick={ () => window.open()}>
            <p className='txt1 pb-1'>Instagram</p>
            <p className='Libre text-6xl max-xl:text-6xl max-lg:text-4xl max-md:text-5xl max-sm:text-4xl'>@Bilscoffee</p>
          </div>
        </div>
        <div className='flex'>
          <div className='cursor-pointer hoverUnderline thickUnderline' onClick={ () => window.open()}>
            <p className='txt1 pb-1'>Email</p>
            <p className='Libre text-6xl max-xl:text-6xl max-lg:text-4xl max-md:text-5xl max-sm:text-4xl'>Bilskopi@gmail.com</p>
          </div>
        </div>
        <div className='flex'>
          <div className='cursor-pointer hoverUnderline thickUnderline' onClick={ () => window.open()}>
            <p className='txt1 pb-1'>Whatsapp</p>
            <p className='Libre text-6xl max-xl:text-6xl max-lg:text-4xl max-md:text-5xl max-sm:text-4xl'>08Pick-An-Outlet</p>
          </div>
        </div>
        <div className='flex'>
          <div className='cursor-pointer hoverUnderline thickUnderline' onClick={ () => window.open()}>
            <p className='txt1 pb-1'>Facebook</p>
            <p className='Libre text-6xl max-xl:text-6xl max-lg:text-4xl max-md:text-5xl max-sm:text-4xl'>Bil's&nbsp;Coffee</p>
          </div>
        </div>
      </div>  
    </div>
  </div>
  )
}

export default Contacts