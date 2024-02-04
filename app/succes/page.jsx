import Buttons from '@/components/Buttons'
import Heart from '@/components/Heart'
import React from 'react'

const Success = () => {

    const kitty = "/kitty5.gif"
  return (
    <div className="h-screen flex items-center justify-center" style={{backgroundImage:`url('imagebg.jpg')`}}>
      <div>
        <h1 className="bg-purple-500 rounded-lg text-5xl font-serif font-semibold p-3 shadow-xl text-center">
          {" "}
         Te iubesc cel mai mult zanuta pisicuta!!
        </h1>
        <Heart image={kitty}></Heart>
       
      
       


      </div>
    </div>
  )
}

export default Success