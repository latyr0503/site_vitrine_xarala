import React from "react";

export default function SectionMax() {
  return (
    <div id="max" className="bg-pink-800 h-screen py-20 space-y-20">
      <h1 className="text-center text-white text-2xl font-extrabold">
        A propose de moi{" "}
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-2 items-center gap-3">
        <div>
          <h1 className=" text-white text-2xl font-bold ">
            Salut;
            <br />
          </h1>
          <div className="p-2 text-white font-bold">
            Je suis ;
            <span className="bg-amber-50 font-extrabold text-2xl text-pink-500 m-4 rounded">
              Soxna Maguette diop
            </span>
          </div>
          <p className="text-sm text-white ">
            Developpeur web & mobile basé au Sénégal,spécialisé dans la création
            de site web et <br />
            applications mobilesmodernz et fonctionnels{" "}
          </p>
          <h1 className=" text-white text-2xl font-extrabold p-2">
            A propose de moi{" "}
          </h1>
          <p className="text-white text-sm">
            Fort de 3ans dé expérience en développement web & mobile et en
            transformation digital,
            <br />
            j'accompagne les entreprises dans la conception de produits
            modernes,intuitifser <br />
            et centrés sur l'utilisateur.Passionnée par l'innovation je
            m'éfforce de rester à la pionte des derniers tendances
            technologiques pour offrir des expériences utilisateurs
            exceptionnelles
          </p>
        </div>
        <div>
          <img
            src="/assets/max.jpeg"
            className="w-full h-96 object-cover rounded-2xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
