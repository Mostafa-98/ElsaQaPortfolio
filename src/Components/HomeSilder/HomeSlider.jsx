import React from "react";
import Slider from "react-slick";
import globe from "../../assets/images/globe.png";
import puzzle from "../../assets/images/puzzle-cube-resized.png";
import daniels from "../../assets/images/danielsProj.png";
import crud from "../../assets/images/crudProj.png";
import ecommerce from "../../assets/images/e-commerceWep.png";
import first from "../../assets/images/firstReact.png";
import random from "../../assets/images/randomQuote.png";
import recipe from "../../assets/images/recipeProj.png";
import smart from "../../assets/images/smartLogin.png";
import weather from "../../assets/images/weatherProj.png";





export default function HomeSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 5000, // Smoother transition
        cssEase: "linear", // Smooth easing
        slidesToShow: 4, // Show fewer slides
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, // Slower autoplay
        arrows: false,
        pauseOnHover: true, // Pause on hover
        lazyLoad: "ondemand", // Lazy loading for performance
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className="py-6">
            <Slider {...settings}>
                <div className="p-2">
                    <a href="https://mostafa-98.github.io/Daniel-Project/">
                        <img src={daniels} className="w-32 h-32 rounded-full hover:scale-125 mx-auto" alt="Daniel Project" />
                    </a>
                </div>
                <div className="p-2">
                    <a href="https://mostafa-98.github.io/Crud-Project/">
                        <img src={crud} className="w-32 h-32 rounded-full hover:scale-125 mx-auto" alt="CRUD Project" />
                    </a>
                </div>
                <div className="p-2">
                    <a href="https://mostafa-98.github.io/Elsaqqa-E-commerce/#/">
                        <img src={ecommerce} className="w-32 h-32 rounded-full hover:scale-125 mx-auto" alt="E-commerce Project" />
                    </a>
                </div>
                <div className="p-2">
                    <a href="https://mostafa-98.github.io/Random-Quotes-Project/">
                        <img src={random} className="w-32 h-32 rounded-full hover:scale-125 mx-auto" alt="Random Quotes Project" />
                    </a>
                </div>
                <div className="p-2">
                    <a href="https://mostafa-98.github.io/Weather-App/">
                        <img src={weather} className="w-32 h-32 rounded-full hover:scale-125 mx-auto" alt="Weather App" />
                    </a>
                </div>
                <div className="p-2">
                    <a href="https://mostafa-98.github.io/Smart-Login/">
                        <img src={smart} className="w-32 h-32 rounded-full hover:scale-125 mx-auto" alt="Smart Login" />
                    </a>
                </div>
                <div className="p-2">
                    <a href="https://mostafa-98.github.io/Recipe-Project/">
                        <img src={recipe} className="w-32 h-32 rounded-full hover:scale-125 mx-auto" alt="Recipe Project" />
                    </a>
                </div>
                <div className="p-2">
                    <a href="https://mostafa-98.github.io/First-React/">
                        <img src={first} className="w-32 h-32 rounded-full hover:scale-125 mx-auto" alt="First React Project" />
                    </a>
                </div>
            </Slider>
        </div>
    );
}