/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  newCard();
};
const newCard = () => {
  let cardContent = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Q",
    "K",
    "A",
    " "
  ];
  let cardSuit = ["♥", "♠", "♣", "♦"];
  let randomNumber = Math.floor(Math.random() * 13);
  let randomSuit = Math.floor(Math.random() * 4);

  document.getElementById("cardDealer").innerHTML = cardContent[randomNumber];
  document.getElementById("cardSign").innerHTML = cardSuit[randomSuit];
  document.getElementById("cardSignBottom").innerHTML = cardSuit[randomSuit];

  if (cardSuit[randomSuit] === "♥" || cardSuit[randomSuit] === "♦") {
    var element = document.getElementById("cardSign");
    element.classList.add("red");
    var element2 = document.getElementById("cardSignBottom");
    element2.classList.add("red");
  } else if (cardSuit[randomSuit] === "♣" || cardSuit[randomSuit] === "♠") {
    element = document.getElementById("cardSign");
    element.classList.remove("red");
    element2 = document.getElementById("cardSignBottom");
    element2.classList.remove("red");
  }
};
