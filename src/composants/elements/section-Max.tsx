import React from 'react'

export default function SectionMax() {
  return (
    <div className='bg-pink-800 h-scren'>
        <h1 className="text-center text-white text-2xl font-extrabold">A propose de moi </h1>
      <div className="grid grid-cols-2 gap-3">
        <div>
          {/* <img
            src="/assets/profil.png"
            className="w-full h-[50%] object-contain rounded-2xl"
            alt=""
          /> */}
          <h1 className='text-center text-white text-2xl font-bold'>Salut;<br/>
          <span className=''>Je suis Maguette Diop</span>
          </h1>
        </div>
        <div>
          <img
            src="/assets/max.jpeg"
            className="w-50 h-[50%] object-cover rounded-2xl"
            alt=""
          />
        </div>
      </div>
        </div>

  )
}
