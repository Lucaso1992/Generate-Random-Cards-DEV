import generateRandomCard from "../components/random-Card-Generator";

const app = document.querySelector("#app");
const buttonShuffler = document.querySelector("#buttonRender");

const render = () => {
  app.innerHTML = generateRandomCard;
};

render();

buttonShuffler.addEventListener("click", () => {
  location.reload();
});
