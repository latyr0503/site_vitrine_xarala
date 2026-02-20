import React from "react";

export default function SectionLatyr() {
  return (
    <div className="bg-yellow-800 p-6 space-y-6 ">
      <h1 className="text-center text-white text-2xl font-extrabold">A propose de moi </h1>
      <div className="grid grid-cols-2 gap-3">

        <div className="w-full h-[50%] object-contain rounded-2xl bg-yellow-800
            border border-amber-50 p-4 text-white ">
          <h1 className="text-2xl">
            Salut,</h1>
            <h1 className="text-2xl">je suis  <span className="text-yellow-800 bg-white text-2xl">Fatou MBENGUE </span></h1>
            Apprenant  a XARALA Academie en developpement full stack

           <h2 className="text-2xl"> A propos de moi </h2> 
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Officiis magnam natus quo impedit sint eaque, </p>
        
            
            
        </div>
        <div>
          <img
            src="/assets/p1.jpeg"
            className="w-full h-[50%] object-cover rounded-2xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

