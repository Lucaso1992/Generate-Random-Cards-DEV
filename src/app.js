import generateRandomCard from "../components/random-Card-Generator.js";
import "./style.css";

const app = document.querySelector("#app");
const buttonShuffler = document.querySelector("#buttonRender");

const render = () => {
  app.innerHTML = generateRandomCard();
};

render();

buttonShuffler.addEventListener("click", render);
