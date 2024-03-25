import LocationCard from '../components/LocationCard'

const Locations = () => {
  return (
    <div className='flex flex-wrap gap-x-8 max-md:gap-x-4 gap-y-8 max-sm:gap-y-8 justify-center px-16 py-8 max-md:px-8' id='locations'>
      <p className='txt2 w-full text-center pb-8'>Locations</p>
      <LocationCard 
        image={ 'Cibis2.jpg' } 
        name={ 'Cibis 9' } 
        address={ 'Jl. Raya Cilandak KKO No.13, RT.13/RW.5, Cilandak Tim., Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12560' } 
        hours={ 'Monday to Friday, 8.00am–7.00pm' } 
        whatsapp={{ number:'0813-1743-6103', onClick: () => window.open('https://wa.me/+6281317436103') }}
        mapsClick={ () => window.open('https://maps.app.goo.gl/EZqvijVeLPvrXDgi9?g_st=ic')}
      />
      <LocationCard 
        image={ 'Kemang4.jpg' } 
        name={ 'Kemang' } 
        address={ 'Jl. Benda Raya No.8a, RT.11/RW.4, Cilandak Tim., Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12560' } 
        hours={ <>Monday to Thursday, 7.30am–9.00pm<br/>Friday to Sunday, 7.00am–11.00pm</>} 
        whatsapp={{ number:'0877-8908-3706', onClick: () => window.open('https://wa.me/+6287789083706') }}
        mapsClick={ () => window.open('https://maps.app.goo.gl/pw7AoNWmzR8qjbFy8?g_st=ic')}
      />
      <LocationCard 
        image={ 'Carousel4.jpg' } 
        name={ 'Bangka' } 
        address={ 'Jl. Bangka V No.7, RT.6/RW.6, Cilandak Tim., Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12560' } 
        hours={ <>Monday to Thursday, 11.30am–12.00pm<br/>Friday to Sunday, 7.00am–11.00pm</>} 
        whatsapp={{ number:'0813-1743-6103', onClick: () => window.open('https://wa.me/+6281317436103') }}
        mapsClick={ () => window.open('https://maps.app.goo.gl/pw7AoNWmzR8qjbFy8?g_st=ic')}
      />
      {/* <div className='w-[30rem] max-lg:w-[24rem] max-md:w-full max-w-[32rem] h-[50rem] max-sm:h-[20rem] flex justify-center items-center p-8 rounded-[3rem] border-2 bg-gray-200'>
        <p className='txt1 text-center'>More Coming Soon<br/><br/>Semoga</p>
      </div> */}
    </div>
  )
}

export default Locations