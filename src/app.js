/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //inner;
  //write your code here
  const who = ["The dog", "My grandma", "The mailman", "My bird"];
  const action = ["ate", "peed on", "crushed", "broke"];
  const what = ["my homework", "my phone", "the car"];
  const when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let randomWho = Math.floor(Math.random() * who.length);
  let randomAction = Math.floor(Math.random() * action.length);
  let randomWhat = Math.floor(Math.random() * what.length);
  let randomWhen = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse")
    .innerHTML = `
        ${who[randomWho]} ${action[randomAction]} ${what[randomWhat]} ${when[randomWhen]}
        `;
};
