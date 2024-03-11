import Button from './Button'

const LocationCard = (props: {image: any, name: any, address: any, hours: any, mapsClick: any}) => {
  return (
    <div className='w-[30rem] max-lg:w-[24rem] max-md:w-full max-md:max-w-[32rem] h-min flex flex-col gap-6 p-8 rounded-[3rem] border-2'>
      <div className='rounded-[2rem] max-md:aspect-video overflow-hidden aspect-square'>
        <img className='w-full h-full object-cover' src={ props.image } alt="poster" />
      </div>
      <p className='Libre text-5xl'>{ props.name }</p>
      <div>
        <p className='txt1'>Address</p>
        <p>{ props.address }</p>
        <p className='txt1 pt-4'>Open hours</p>
        <p>{ props.hours }</p>
      </div>
      <Button text={ 'Open Maps' } onClick={ props.mapsClick }/>
    </div>
  )
}

export default LocationCard