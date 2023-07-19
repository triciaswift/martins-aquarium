const database = {
  fish: [
    {
      image: `https://www.scienceandthesea.org/sites/default/files/images/stories/591220-blue%20crab.jpg`,
      name: "Bart",
      food: "crustaceans",
      species: "Blue crab",
      length: "9 in",
      location: "Chesapeake Bay",
    },
    {
      image: `https://upload.wikimedia.org/wikipedia/commons/4/4d/Haddock%2C_Boston_Aquarium.JPG`,
      name: "Homer",
      food: "crustaceans",
      species: "Haddock",
      length: "2 ft",
      location: "Gulf of Maine",
    },
    {
      image: `https://upload.wikimedia.org/wikipedia/commons/0/0f/Atlantic_salmon_fish.jpg`,
      name: "Lisa",
      food: "plankton",
      species: "Salmon",
      length: "3 ft",
      location: "Coast of Norway",
    },
    {
      image: `https://upload.wikimedia.org/wikipedia/commons/1/19/Portrait_of_Cod.jpg`,
      name: "Marge",
      food: "crustaceans",
      species: "Cod",
      length: "2 ft",
      location: "Coast of New England",
    },
    {
      image: `https://upload.wikimedia.org/wikipedia/commons/7/73/Pacific_bluefin_tuna.jpg`,
      name: "Moe",
      food: "crustaceans",
      species: "Tuna",
      length: "6 ft",
      location: "Coast of Maldives",
    },
  ],
};

export const getFish = () => {
  return database.fish.map((fish) => ({ ...fish }));
};
