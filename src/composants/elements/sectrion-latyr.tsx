import React from "react";

export default function SectionLatyr() {
  return (
    <div className="bg-green-800 h-screen py-20 space-y-20 ">
      <h1 className="text-center text-white text-2xl font-extrabold">
        A propose de moi{" "}
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-3">
        <div>
          <img
            src="/assets/profil.png"
            className="w-full h-150 object-contain rounded-2xl"
            alt=""
          />
        </div>
        <div>
          <img
            src="/assets/latyr.jpeg"
            className="w-full h-150 object-cover rounded-2xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
