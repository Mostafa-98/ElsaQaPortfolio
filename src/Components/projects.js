import daniels from "../assets/images/danielsProj.jpg";
import crud from "../assets/images/crudProj.png";
import ecommerce from "../assets/images/e-commerceWep.png";
import first from "../assets/images/firstReact.jpg";
import random from "../assets/images/randomQuote.png";
import recipe from "../assets/images/recipeProj.png";
import smart from "../assets/images/smartLogin.jpg";
import game from "../assets/images/gameApp.jpg";
import weather from "../assets/images/weatherProj.jpg";

const projects = [
  { title: "Game Reviews", desc: "Free-to-play games browser by category, using the FreeToGame API.", img: game, link: "https://mostafa-98.github.io/Game_App/", repo: "https://github.com/Mostafa-98/Game_App", tags: ["JavaScript", "API"] },
  { title: "E-commerce Platform", desc: "Online store front end with product listing and cart.", img: ecommerce, link: "https://mostafa-98.github.io/Elsaqqa-E-commerce/#/", repo: "https://github.com/Mostafa-98/Elsaqqa-E-commerce", tags: ["React", "Cart"] },
  { title: "Weather Forecast", desc: "Search any city and see a 3-day forecast from WeatherAPI.", img: weather, link: "https://mostafa-98.github.io/Weather-App/", repo: "https://github.com/Mostafa-98/Weather-App", tags: ["JavaScript", "API"] },
  { title: "Smart Login", desc: "Login and sign-up forms with validation, saved in the browser.", img: smart, link: "https://mostafa-98.github.io/Smart-Login/", repo: "https://github.com/Mostafa-98/Smart-Login", tags: ["JavaScript", "Forms"] },
  { title: "Recipe Finder", desc: "Search recipes and browse results from a public API.", img: recipe, link: "https://mostafa-98.github.io/Recipe-Project/", repo: "https://github.com/Mostafa-98/Recipe-Project", tags: ["JavaScript", "API"] },
  { title: "CRUD Dashboard", desc: "Create, read, update and delete records in the browser.", img: crud, link: "https://mostafa-98.github.io/Crud-Project/", repo: "https://github.com/Mostafa-98/Crud-Project", tags: ["JavaScript", "CRUD"] },
  { title: "Random Quotes", desc: "Fetches a new random quote on each click.", img: random, link: "https://mostafa-98.github.io/Random-Quotes-Project/", repo: "https://github.com/Mostafa-98/Random-Quotes-Project", tags: ["JavaScript"] },
  { title: "Daniel Portfolio", desc: "Bootstrap one-page portfolio template, restyled by me.", img: daniels, link: "https://mostafa-98.github.io/Daniel-Project/", repo: "https://github.com/Mostafa-98/Daniel-Project", tags: ["Bootstrap", "HTML/CSS"] },
  { title: "React Starter App", desc: "Freelancer theme rebuilt with React and Vite.", img: first, link: "https://mostafa-98.github.io/First-React/", repo: "https://github.com/Mostafa-98/First-React", tags: ["React", "Vite"] },
];
export default projects;
