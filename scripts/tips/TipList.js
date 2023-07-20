import { getTips } from "../fish/database.js";

export const TipList = () => {
  // Invoke the function that you imported from the database module
  const tips = getTips();

  // Start building a string filled with HTML syntax
  let htmlString = '<article class="tipList">';

  // Create HTML representations of each fish here
  for (const tip of tips) {
    htmlString += `<section class="tip_card">
                <div class="tip_name">${tip.process}</div>
                <div class="tip_cleaning">${tip.description}</div>
          </section>
  `;
  }
  htmlString += `</article>`;

  return htmlString;
};
