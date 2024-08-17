const minimum = document.getElementById("minimum");
const maximum = document.getElementById("maximum");
const generateButton = document.querySelector("button");
const generatedNum = document.getElementById("random-number");

const generateHandler = () => {
  const min = +minimum.value;
  const max = +maximum.value;
  if (!max) {
    generatedNum.innerText = "Need to enter the Maximum";
  } else {
    const randomNum = min + Math.trunc(Math.random() * (max - min + 1));
    generatedNum.innerText = `Random number : ${randomNum}`;
  }
};

generateButton.addEventListener("click", generateHandler);