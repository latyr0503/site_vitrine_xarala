import React from 'react'

export default function SectionMamoudou() {
  return (
    <div className='bg-blue-800 h-screen '>
        <div className='max-w-6xl mx-auto'>
 <h1 className='text-white font-bold text-center text-3xl mb-4'>Mamoudou</h1>
         <h1 className="text-center text-white text-2xl font-extrabold mb-3">A propose de moi </h1>
      <div className="grid grid-cols-2 gap-3 ">
        <div className='space-y-15'>
         <h1 className='font-bold text-white text-3xl'>Salut,<br />Je suis <span className='bg-white text-blue-800 rounded-full px-3 '>Mamoudou Facko</span>  👋</h1>
         <p className='text-white'>Développeur web en formation et étudiant en Master à l'UCAD basé au Sénégal, je crée des applications web modernes avec React, Tailwind CSS et Node.js .</p>
         <p className='text-white'>Passionné par l'innovation, l'apprentissage continu et l'excellence, je m'efforce de développer des solutions simples, performantes et centrées sur l'utilisateur.</p>
        </div>
        <div>
          <img
            src="/public/Profil.jpg"
            className="w-full h-[50%] object-top object-cover rounded-2xl shadow-md shadow-yellow-300"
            alt=""
          />
        </div>
      </div >
        </div>
      
    </div>
  )
}