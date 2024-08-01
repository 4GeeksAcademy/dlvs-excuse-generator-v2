/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //inner;
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed on", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  //randomizing
  let who0 = Math.floor(Math.random() * who.length);
  let action0 = Math.floor(Math.random() * action.length);
  let what0 = Math.floor(Math.random() * what.length);
  let when0 = Math.floor(Math.random() * when.length);

  //inserting into html
  document.querySelector(
    "#excuse"
  ).innerHTML = `${who[who0]} ${action[action0]} ${what[what0]} ${when[when0]}`;
};
