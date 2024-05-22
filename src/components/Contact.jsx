import React, { useState } from 'react';

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    
      <div id='contact' className="container px-5 py-10 mx-auto flex flex-col  justify-around items-center p-5 m-5">
        <h2 className="text-white sm:text-4xl text-3xl mb-8 font-bold  ">
             Send a message
          </h2>
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-full md:w-2/3 w-full flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0 items-center justify-around"
        >
          
          
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700  focus:border-white/40 focus:ring-2 focus:ring-white/50 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700  focus:border-white/40 focus:ring-2 focus:ring-white/50 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white/30 rounded border border-gray-700 focus:border-white/40 focus:ring-2 focus:ring-white/50 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-black bg-white border-0 py-2 px-3 focus:outline-none 
             rounded text-[15px]  font-font2 mt-3"
          >
            Send  message
          </button>
        </form>
        <p className='text-text1/35 text-[10px] mt-10'>All Rights Reserved @2024 RAJESH ANDE</p>
      </div>
    
  );
};