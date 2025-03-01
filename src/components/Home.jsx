import React from "react";
import { Typewriter } from "react-simple-typewriter";
import download from "../assets/download.svg";
import logo from "../assets/2.jpg";
import "animate.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section
      id="home"
      className="container w-screen h-screen reveal pt-3 flex flex-col md:flex-row justify-center gap-20 items-center rounded-xl 5 m-auto"
    >
      <figure className="flex justify-center items-center m-5 animate__animated animate__headShake">
        <img
          className="md:w-[300px] w-[200px] rounded-[75px] md:rounded-[100px] border-[4px] border-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
          src={logo}
          alt="Rajesh's profile"
        />
      </figure>

      <article className="flex justify-center items-center m-5">
        <div className="flex flex-1 font-font1 flex-grow gap-[10px] h-full justify-center items-center md:items-start flex-col animate__animated animate__headShake w-[400px]">
          <h1 className="font-bold font-font2 text-[20px] text-text1 sm:text-[20px]">
            Hello, it's me
          </h1>

          <div className="text-5xl md:text-8xl flex text-text1 font-customPD justify-center items-center">
            <span className="bg-custom-gradient border-2 border-white rounded-lg flex justify-between items-center text-white shadow-lg p-2 ">
              <span className="">Ra</span>
            </span>
            jesh<span>.</span>
          </div>

          <p className="text-white font-customPD lowercase text-[40px]">
            <Typewriter
              words={["Full Stack Dev", "MERN Stack Dev", "Front End Dev"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>

         
          <Link
            href="https://drive.google.com/file/d/1VZFtGlvd4NY7u-11CZPDZYaE-ih7Up5v/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-4 py-3 gap-2 rounded-md my-10 border flex justify-around items-center border-black  hover:text-black text-lg transition-transform transform bg-custom-gradient text-text1 hover:scale-105">
              <span className="font-bold font-font2">My Resume</span>
              <img className="w-[18px]" src={download} alt="Download icon" />
            </button>
          </Link>
        </div>
      </article>
    </section>
  );
};
