import React from 'react'
import contactImg from './../../assets/images/make-contact-resized.png'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>

      <section className="h-auto md:h-screen dark:bg-[#222222] bg-[#F4EFED] flex  items-center py-12">
        <div className="container w-[90%] mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-6">

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              className="object-cover w-[90%] md:w-[80%] h-auto rounded-lg "
              src={contactImg}
              alt="Puzzle"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-4 text-center md:text-start p-5">
            <h5 className="text-4xl text-center md:text-5xl font-extrabold text-[#222222] uppercase dark:text-white">
              make contact
            </h5>
            <p className="text-base md:text-lg text-center text-[#222222] dark:text-gray-400">
              This is My Contact Page, You Can Contact Me Anytime You Want, I'm Always Here For You.:
            </p>
            <p className="text-base md:text-lg text-center text-[#222222] dark:text-gray-400">
              Email : mostafaelsaqqa79@gmail.com
            </p>
            <p className="text-base md:text-lg text-center text-[#222222] dark:text-gray-400">
              Phone : 01013243373
            </p>
            <a href="https://wa.me/201013243373"
              className="font-extrabold text-gray-900 hover:text-white border-2 hover:border-[#F4EFED] bg-[#F4EFED] border-gray-800 hover:bg-[#222222] focus:ring-4 text tracking-widest uppercase focus:outline-none focus:ring-gray-300 rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-[#F4EFED] dark:text-gray-400 dark:hover:text-white dark:hover:bg-[#222222] dark:focus:ring-gray-800"
              target="_blank">
              <button>Chat With Me </button>
            </a>
          </div>

        </div>
      </section>
    </>
  )
}

export default Contact