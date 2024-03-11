/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let extensions = [".com", ".es", ".us"];

  for (let pronoun in pronouns) {
    for (let adj in adjs) {
      for (let noun in nouns) {
        for (let extension in extensions) {
          console.log(
            pronouns[pronoun] + adjs[adj] + nouns[noun] + extensions[extension]
          );
        }
      }
    }
  }
};
