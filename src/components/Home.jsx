import React from "react";
import pfp from "../assets/rohit.jpg";

const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-neutral-950 to-neutral-800/1 h-screen space-x-6 pt-12">
        <div className="flex flex-col items-center gap-4">
          <img src={pfp} alt="img" className="h-48 border shadow-lg rounded-lg" />
          <h3 className="text-xl text-white">Hey 👋🏻 This is ...</h3>
          <h1 className="font-bold text-5xl bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
            Rohit Kumar
          </h1>
          <p className=" px-8 text-neutral-500">
            I am a software developer with a passion for building scalable and
            efficient software solutions.
          </p>
          <div className="flex justify-center ">
            <button className=" bg-gradient-to-r from-orange-500 to-orange-800 hover:border py-2 px-3 mx-4 rounded cursor-pointer w-32 h-10">
            
              About
            </button>
            <button className=" bg-gradient-to-r from-orange-500 to-orange-800 hover:border mx-4 py-2 px-3 rounded cursor-pointer w-32 h-10">
            
              Get In Touch
            </button>
          </div>

        <h1>What I've Been Upto...</h1>
        <div className="w-full lg:w-1/2 flex flex-wrap  justify-between gap-2 px-8">
          <div className=" p-4 border-none  bg-neutral-700 rounded-2xl ">
            <h2 className="text-3xl bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
            
              Professional Journey
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              id consectetur maxime perspiciatis recusandae temporibus nisi
              quaerat voluptatum nulla. Veritatis repellat aut unde deserunt
              quibusdam sapiente alias tempora, provident assumenda dolores
              ullam?
            </p>
          </div>
          <div className="p-4  border-none rounded-2xl bg-neutral-700  mt-2">
            <h1 className="text-3xl bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent ">
              Personal Projects
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              id consectetur maxime perspiciatis recusandae temporibus nisi
              quaerat voluptatum nulla. Veritatis repellat aut unde deserunt
              quibusdam sapiente alias tempora, provident assumenda dolores
              ullam?
            </p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;
