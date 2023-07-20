const database = {
  fish: [
    {
      image:
        "https://www.pngarts.com/files/12/Aquatic-Angelfish-Transparent-Image.png",
      name: "Ned Stark",
      food: "Plankton",
      species: "Angelfish",
      length: "15",
      location: "Amazon River Basin",
    },
    {
      image:
        "https://i.pinimg.com/originals/e0/e0/7e/e0e07eadd34ddb2bf60da067efbf26b3.png",
      name: "Robb Stark",
      food: "Algae, zooplankton",
      species: "Clownfish",
      length: "8",
      location: "Indo-Pacific",
    },
    {
      image: "https://gallery.yopriceville.com/downloadfullsize/send/25228",
      name: "Sansa Stark",
      food: "Algae, plankton",
      species: "Blue Tang",
      length: "30",
      location: "Indo-Pacific",
    },
    {
      image:
        "https://www.aqueon.com/-/media/project/oneweb/aqueon/us/assets/care-sheets/boesemanirainbow_600x400.png",
      name: "Arya Stark",
      food: "Insects, crustaceans",
      species: "Rainbowfish",
      length: "12",
      location: "Australia",
    },
    {
      image:
        "https://i.pinimg.com/originals/bb/f4/40/bbf440516f23076a98850cb64b83af6d.png",
      name: "Jon Snow",
      food: "Insects, larvae",
      species: "Betta Fish",
      length: "7",
      location: "Southeast Asia",
    },
    {
      image:
        "https://www.aqueon.com/-/media/project/oneweb/aqueon/us/assets/care-sheets/discus2.png",
      name: "Tyrion Lannister",
      food: "Worms, small fish",
      species: "Discus Fish",
      length: "20",
      location: "Amazon River Basin",
    },
    {
      image:
        "https://i.pinimg.com/originals/be/ea/cd/beeacd150d649c13686083a154fa5e48.png",
      name: "Cersei Lannister",
      food: "Algae, insect larvae",
      species: "Guppy",
      length: "5",
      location: "South America",
    },
    {
      image:
        "https://marinewise.com.au/wp-content/uploads/2020/07/Moorish-Idol-Marinewise.png",
      name: "Jamie Lannister",
      food: "Sponges, algae",
      species: "Moorish Idol",
      length: "20",
      location: "Tropical Indo-Pacific",
    },
    {
      image:
        "https://www.pngall.com/wp-content/uploads/5/Piranha-PNG-Images.png",
      name: "Daenerys Targaryen",
      food: "Fish, insects",
      species: "Piranha",
      length: "25",
      location: "Amazon River Basin",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/023/839/797/non_2x/koi-carp-fish-isolated-on-a-transparent-background-free-png.png",
      name: "Samwell Tarly",
      food: "Pellets, insects",
      species: "Koi",
      length: "60",
      location: "Japan",
    },
  ],
  tip: [
    {
      process: "Cleaning",
      description:
        "Regularly clean the fish tank by removing debris, uneaten food, and waste using an aquarium net and a gravel vacuum. Scrub the glass to remove algae buildup and clean tank decorations as needed. Perform partial water changes regularly to maintain water quality.",
    },
    {
      process: "Water Salinity",
      description:
        "Ensure the water salinity (salt concentration) is appropriate for the specific fish species in the tank. Some fish require brackish water with higher salinity levels, while others prefer freshwater with no added salt. Research the salinity requirements of your fish and adjust accordingly.",
    },
    {
      process: "Water Temperature",
      description:
        "Maintain the water temperature within the optimal range for your fish species. Use an aquarium heater and thermometer to monitor and regulate the temperature. Most tropical fish prefer temperatures between 75°F to 82°F (24°C to 28°C), but different species may have specific temperature preferences.",
    },
  ],
  locations: [
    {
      id: 1,
      name: "Amazon River Basin",
    },
    {
      id: 2,
      name: "Indo-Pacific",
    },
    {
      id: 3,
      name: "Australia",
    },
    {
      id: 4,
      name: "Southeast Asia",
    },
    {
      id: 5,
      name: "South America",
    },
    {
      id: 6,
      name: "Tropical Indo-Pacific",
    },
    {
      id: 7,
      name: "Japan",
    },
    {
      id: 8,
      name: "Norway",
    },
    {
      id: 9,
      name: "Peru",
    },
    {
      id: 10,
      name: "Alaska",
    },
  ],
};

export const getFish = () => {
  return database.fish.map((fish) => ({ ...fish }));
};

export const getTips = () => {
  return database.tip.map((tip) => ({ ...tip }));
};
