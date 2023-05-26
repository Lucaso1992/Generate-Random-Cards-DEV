const myEmojis = ["♦", "♥", "♠", "♣"];
const myNumbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

const findRandom = array => {
  return array[Math.floor(Math.random() * array.length)];
};

const randomCard = (number, emoji) => {
  let color = "";
  emoji === "♥" || emoji === "♦"
    ? (color = "text-red-500")
    : (color = "text-black");

  return `<div
  class="card container text-center d-flex flex-column justify-content-between mt-5"
>
  <div class="text-start display-3 ${color}">${emoji}</div>
  <div class="center text-center display-1">${number}</div>
  <div class="bottom text-end display-3 ${color}">${emoji}</div>
</div>)`;
};

const generateRandomCard = randomCard(
  findRandom(myNumbers),
  findRandom(myEmojis)
);

export default generateRandomCard;
