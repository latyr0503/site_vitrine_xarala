import React from "react";

export default function SectionLatyr() {
  return (
    <div className="bg-green-800 p-6 space-y-6 ">
      <h1 className="text-center text-white text-2xl font-extrabold">A propose de moi </h1>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <img
            src="/assets/profil.png"
            className="w-full h-[50%] object-contain rounded-2xl"
            alt=""/>
        </div>
        <div>
          <img
            src="/assets/latyr.jpeg"
            className="w-full h-[50%] object-cover rounded-2xl"
            alt=""/>
        </div>
      </div>
    </div>
  );
}
