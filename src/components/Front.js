import React from 'react'
import SimpleImageSlider from "react-simple-image-slider"
import images from '../assets/Images'

function Front() {
  return (
    <div className='text-white font-mono'>
      <div className='w-full mx-auto text-center flex flex-col justify-center'>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            You grow we cut
          </p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>

Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className='w-full mx-auto flex justify-center py-2'>
      <SimpleImageSlider
        width={900}
        height={600}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      </div>

    </div>
  )
}

export default Front