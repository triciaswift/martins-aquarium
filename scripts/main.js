// import { getFish } from "./fish/database.js";
// Import the FishList function from the correct module
import { FishList } from "./fish/FishList.js";
import { TipList } from "./tips/TipList.js";

// const allFish = getFish();

// for (const fish of allFish) {
//   console.log(fish);
// }

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".allFish");
parentHTMLElement.innerHTML = FishList();

const parentHTMLElement2 = document.querySelector(".cleaningTips");
parentHTMLElement2.innerHTML = TipList();
