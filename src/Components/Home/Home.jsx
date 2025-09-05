import puzzle from './../../assets/images/puzzle-cube-resized.png'
import globe from './../../assets/images/globe.png'
import { Link } from 'react-router-dom'
import HomeSlider from '../HomeSilder/HomeSlider'
import daniels from "../../assets/images/danielsProj.png";
import crud from "../../assets/images/crudProj.png";
import ecommerce from "../../assets/images/e-commerceWep.png";
import first from "../../assets/images/firstReact.png";
import random from "../../assets/images/randomQuote.png";
import recipe from "../../assets/images/recipeProj.png";
import smart from "../../assets/images/smartLogin.png";
import weather from "../../assets/images/weatherProj.png";
import Projects from './../Projects/Projects';
import contactImg from './../../assets/images/make-contact-resized.png'
import mypic from './../../assets/images/mypic-circle.jpeg'
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <>


      {/* hello my name is moustafa */}


      {/*  Header Section  */}
      <div className=' h-screen bg-[#F4EFED] dark:bg-[#222222]'>
        <div className=' container mx-auto flex text-center justify-center items-center h-full'>
          <div className=" mt-10 flex flex-col justify-center items-center  border-gray-200 rounded-lg shadow-sm dark:bg-[#222222] dark:border-gray-700">
            <a href="#" className=' '>
              <img className=" w-[200px]  rounded-full text-center" src={mypic} alt="" />
            </a>
            <div className="p-5 text-center">
              <a href="#">
                <h5 className=" text-center mb-2 text-6xl animate-pulse font-bold tracking-tight text-[#222222] dark:text-[#F4EFED]">I'm Moustafa Elsaqqa</h5>
              </a>
              <p className="mb-3   tagline-span-text text-gray-700 dark:text-gray-400 text-xl md:text-2xl font-medium tracking-wide opacity-100 transition-opacity duration-500  uppercase " data-text="Front end developer"> Front end developer.</p>
              <p className="mb-3 font-normal max-w-md mx-auto text-gray-500 dark:text-gray-400 text-center"> This portfolio showcases my development experience, methods, and outcomes in building exceptional user interfaces.</p>
              <button className="rounded-full hover:bg-[#222222]  hover:text-[#F4EFED]  items-center mt-4 px-4 py-3 text-sm font-medium text-center    transition-all focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#22222] border-3 dark:text-[#F4EFED] dark:hover:border-4 dark:hover:text-[#F4EFED] dark:focus:ring-blue-800">
                <p className=''>Show more</p>
              </button>

            </div>
            <i className="fa-solid fa-arrow-down text-6xl text-gray-500 mt-5 animate-bounce "></i>
          </div>

        </div>
      </div>

      {/*  About Section  */}
      <section className="h-auto md:h-screen bg-[#F4EFED] dark:bg-[#F4EFED] flex items-center py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-6">

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              className="object-cover w-[90%] md:w-[80%] h-auto rounded-lg "
              src={puzzle}
              alt="Puzzle"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 text-center md:text-start p-5">
            <h5 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-[#222222]">
              What I Do
            </h5>
            <p className="text-base md:text-lg text-gray-700 dark:text-[#222222]">
              I craft high-quality front-end experiences using React, ensuring seamless performance, intuitive interactions, and visually stunning designs. What does high-quality mean, you ask? It means three things:
            </p>
            <p className="text-base md:text-lg text-gray-700 dark:text-[#222222]">
              <span className="font-bold">1. Technical –</span> Clean, optimized code following best practices, ensuring fast load times, accessibility, and smooth performance.
            </p>
            <p className="text-base md:text-lg text-gray-700 dark:text-[#222222]">
              <span className="font-bold">2. Beautiful –</span> Thoughtful UI/UX, structured layouts, and a modern aesthetic that brings designs to life.
            </p>
            <p className="text-base md:text-lg text-gray-700 dark:text-[#222222]">
              <span className="font-bold">3. Easy to Use –</span> Functionality meets simplicity. I focus on delivering intuitive, user-friendly experiences that feel effortless.
            </p>
            <Link to="/about" className="text-center md:text-start">
              <button
                type="button"
                className="font-extrabold text-gray-900 hover:text-white border-2 border-gray-800 hover:bg-gray-900 focus:ring-4 text tracking-widest uppercase focus:outline-none focus:ring-gray-300 rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              >
                Read More
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/*  Who I do it for Section  */}
      <section className="min-h-screen bg-[#F4EFED] dark:bg-gray-900 flex flex-col items-center py-12">
        <div className="container w-[90%] mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-8">

          {/* Text Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 text-center md:text-start p-5">
            <h5 className="uppercase text-4xl md:text-5xl font-extrabold text-[#222222] dark:text-white">
              Who I do it for
            </h5>
            <p className="text-base md:text-lg text-[#222222] dark:text-gray-400">
              I work for design, advertising and web agencies, charities, startups, and individuals all over the world. I live, laugh, and love in the fair city of Bristol, UK.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              className="object-cover w-[90%] md:w-[80%] h-auto"
              src={globe}
              alt="Globe"
            />
          </div>
        </div>

        {/* Projects Section */}
        <div className="text-center w-full mt-16 md:mt-20 px-6">
          <h1 className="text-[#222222] font-extrabold uppercase  dark:text-[#F4EFED] text-2xl md:text-3xl">
            I've worked on projects for:
          </h1>
          <HomeSlider />
        </div>
      </section>

      {/*   Works Section  */}
      <section className="h-auto md:h-screen dark:bg-[#F4EFED] bg-[#F4EFED] flex items-center py-12">
        <div className="container w-[90%] md:w-[80%] justify-center items-center mx-auto">
          <h1 className="py-6 font-extrabold text-center text-3xl md:text-5xl justify-center items-center uppercase dark:text-[#222222]">
            SELECTED WORKS
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <a href="https://mostafa-98.github.io/Elsaqqa-E-commerce/#/">
              <div className="relative group">
                <div className="bg-black border rounded-lg w-full h-full absolute flex justify-center items-center opacity-90 transition-opacity duration-500 group-hover:opacity-0">
                  {/* Overlay */}
                </div>
                <h1 className="absolute inset-0 flex justify-center items-center italic font-extrabold text-white text-2xl md:text-3xl uppercase transition-opacity duration-500 group-hover:opacity-0">
                  E-commerce
                </h1>
                <img className="h-auto max-w-full rounded-lg" src={ecommerce} alt="E-commerce Website" />
              </div>
            </a>
            <a href="https://mostafa-98.github.io/Smart-Login/">
              <div className="relative group">
                <div className="bg-black border rounded-lg w-full h-full absolute flex justify-center items-center opacity-90 transition-opacity duration-500 group-hover:opacity-0">
                  <h1 className="py-6 italic font-extrabold text-white   text-center text-2xl md:text-3xl uppercase">
                    Smart Login
                  </h1>
                </div>
                <img className="h-auto max-w-full rounded-lg" src={smart} alt="Smart Login" />
              </div>
            </a>
            <a href="https://mostafa-98.github.io/Recipe-Project/">
              <div className="relative group">
                <div className="bg-black border rounded-lg w-full h-full absolute flex justify-center items-center opacity-90 transition-opacity duration-500 group-hover:opacity-0">
                  <h1 className="py-6 italic font-extrabold text-white text-center text-2xl md:text-3xl uppercase">
                    Recipe Project
                  </h1>
                </div>
                <img className="h-auto max-w-full rounded-lg" src={recipe} alt="Recipe Project" />
              </div>
            </a>
            <a href="https://mostafa-98.github.io/First-React/">
              <div className="relative group">
                <div className="bg-black border rounded-lg w-full h-full absolute flex justify-center items-center opacity-90 transition-opacity duration-500 group-hover:opacity-0">
                  <h1 className="py-6 italic font-extrabold text-white text-center text-2xl md:text-3xl uppercase">
                    First React Project
                  </h1>
                </div>
                <img className="h-auto max-w-full rounded-lg" src={first} alt="First React Project" />
              </div>
            </a>
            <a href="https://mostafa-98.github.io/Weather-App/">
              <div className="relative group">
                <div className="bg-black border rounded-lg w-full h-full absolute flex justify-center items-center opacity-90 transition-opacity duration-500 group-hover:opacity-0">
                  <h1 className="py-6 italic font-extrabold text-white text-center text-2xl md:text-3xl uppercase">
                    Weather Website
                  </h1>
                </div>
                <img className="h-auto max-w-full rounded-lg" src={weather} alt="Weather Website" />
              </div>
            </a>
            <a href="https://mostafa-98.github.io/Daniel-Project/">
              <div className="relative group">
                <div className="bg-black border rounded-lg w-full h-full absolute flex justify-center items-center opacity-90 transition-opacity duration-500 group-hover:opacity-0">
                  <h1 className="py-6 italic font-extrabold text-white text-center text-2xl md:text-3xl uppercase">
                    Daniels Project
                  </h1>
                </div>
                <img className="h-auto max-w-full rounded-lg" src={daniels} alt="Daniels Project" />
              </div>
            </a>
          </div>

          <div className="flex justify-center items-center pt-7">
            <Link to="/projects">
              <button
                type="button"
                className="font-extrabold text-white hover:text-black border-2 border-gray-800 bg-gray-900 hover:bg-white focus:ring-4 text tracking-widest uppercase focus:outline-none focus:ring-gray-300 rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              >
                More work
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/*  Contact Section  */}

      <Contact />



    </>
  )
}

export default Home