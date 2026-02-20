import React from "react";

export default function SectionZiza() {
  return (
    <div id="aziz" className="bg-indigo-700 h-screen py-20 space-y-20 ">
      <h1 className="text-center text-white py-4 text-2xl font-extrabold">
        A propose de moi{" "}
      </h1>
      <div className="max-w-6xl items-center mx-auto grid grid-cols-2 gap-3 px-6">
        <div className=" text-white text-2xl font-bold  ">
          <h3 className="text-3xl md:text-3xl font-bold text-white">Salut,</h3>

          <h2 className="text-3xl  font-bold mt-4 text-white">
            Je suis
            <span className=" text-green-700 text-4xl px-4 py-1">
              Abdou Aziz Ndiaye
            </span>
            👨🏾‍💻
          </h2>

          <p className="text-white mt-4 text-lg">
            Développeur web & mobile basé au Sénégal, spécialisé dans la
            création de sites web et applications mobiles modernes et
            fonctionnels.
          </p>

          <h3 className="text-3xl font-bold mt-8 text-white">
            À propos de moi
          </h3>

          <p className="text-white mt-4 text-lg">
            Fort de 3 ans d’expérience en développement Web & Mobile et en
            transformation digitale, j’accompagne les entreprises dans la
            conception de produits modernes, intuitifs et centrés sur
            l’utilisateur. Passionné par l’innovation, je m’efforce de rester à
            la pointe des dernières tendances technologiques pour offrir des
            expériences utilisateur exceptionnelles.
          </p>
        </div>
        <div>
          <img
            src="/assets/ziza.jpeg"
            className="w-full h-150 object-cover rounded-2xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
