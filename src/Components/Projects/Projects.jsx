
import daniels from "../../assets/images/danielsProj.png";
import crud from "../../assets/images/crudProj.png";
import ecommerce from "../../assets/images/e-commerceWep.png";
import first from "../../assets/images/firstReact.png";
import random from "../../assets/images/randomQuote.png";
import recipe from "../../assets/images/recipeProj.png";
import smart from "../../assets/images/smartLogin.png";
import weather from "../../assets/images/weatherProj.png";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <>

      <section className="h-auto md:h-screen py-12 dark:bg-[#222222] bg-[#F4EFED] flex items-center ">
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
          <div className=" justify-center  items-center mx-auto">
            <h1 className="py-6 font-extrabold text-center text-3xl md:text-5xl justify-center items-center uppercase dark:text-[#F4EFED]">
              More WORKS
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <a href="https://mostafa-98.github.io/Random-Quotes-Project/">
                <div className="relative group">
                  <div className="bg-black border rounded-lg w-full h-full absolute flex justify-center items-center opacity-90 transition-opacity duration-500 group-hover:opacity-0">
                    <h1 className="py-6 italic font-extrabold text-white text-center text-2xl md:text-3xl uppercase">
                      Random Quote 
                    </h1>
                  </div>
                  <img className="h-auto max-w-full rounded-lg" src={random} alt="First React Project" />
                </div>
              </a>
              <a href="https://mostafa-98.github.io/Weather-App/">
                <div className="relative group">
                  <div className="bg-black border rounded-lg w-full h-full absolute flex justify-center items-center opacity-90 transition-opacity duration-500 group-hover:opacity-0">
                    <h1 className="py-6 italic font-extrabold text-white text-center text-2xl md:text-3xl uppercase">
                      Crud Project
                    </h1>
                  </div>
                  <img className="h-auto max-w-full rounded-lg" src={crud} alt="Weather Website" />
                </div>
              </a>
              <a href="https://mostafa-98.github.io/Daniel-Project/">
                <div className="relative group">
                  <div className="bg-black border rounded-lg w-full h-full absolute flex justify-center items-center opacity-90 transition-opacity duration-500 group-hover:opacity-0">
                    <h1 className="py-6 italic font-extrabold text-white text-center text-2xl md:text-3xl uppercase">
                      E-commerce
                    </h1>
                  </div>
                  <img className="h-auto max-w-full rounded-lg" src={ecommerce} alt="Daniels Project" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects