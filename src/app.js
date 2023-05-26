import generateRandomCard from "../components/random-Card-Generator";

const app = document.querySelector("#app");

const render = () => {
  app.innerHTML = generateRandomCard;
};

render();
