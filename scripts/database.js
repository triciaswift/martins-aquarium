const database = {
  fish: [
    {
      name: "Bart",
      food: "crustaceans",
      species: "Blue crab",
      size: "9 in",
      harvested: "Chesapeake Bay",
    },
    {
      name: "Homer",
      food: "crustaceans",
      species: "Haddock",
      size: "2 ft",
      harvested: "Gulf of Maine",
    },
    {
      name: "Lisa",
      food: "plankton",
      species: "Salmon",
      size: "3 ft",
      harvested: "Coast of Norway",
    },
    {
      name: "Marge",
      food: "crustaceans",
      species: "Cod",
      size: "2 ft",
      harvested: "Coast of New England",
    },
    {
      name: "Ned",
      food: "crustaceans",
      species: "Tuna",
      size: "6 ft",
      harvested: "Coast of Maldives",
    },
  ],
};

export const getFish = () => {
  return database.fish.map((fish) => ({ ...fish }));
};
