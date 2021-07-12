// LECTURE: Functions

const describeCountry = function (country, population, capitalCity) {
  return console.log(
    `${country} has ${population} people and its capital city is ${capitalCity}`
  );
};

describeCountry("Turkey", 84, "Ankara");
describeCountry("Germany", 84, "Berlin");
describeCountry("Norway", 5, "Oslo");

// ----------------------------------------------------------------

// LECTURE: Function Declarations vs. Expressions
// -- Function Declarations
function percentageOfWorld1(country, population) {
  const percentage = (population / 7900) * 100;
  return console.log(
    `${country} has ${population} people, so it's about ${percentage.toFixed(
      2
    )}% of the world population`
  );
}

percentageOfWorld1("Turkey", 84);
percentageOfWorld1("China", 1441);
percentageOfWorld1("Russian", 144);

// --Function Expression
const percentageOfWorld2 = function (country, population) {
  const percentage = (population / 7900) * 100;
  return console.log(
    `${country} has ${population} people, so it's about ${percentage.toFixed(
      2
    )}% of the world population`
  );
};

percentageOfWorld2("Turkey", 84);
percentageOfWorld2("China", 1441);
percentageOfWorld2("Russian", 144);

// ----------------------------------------------------------------

// LECTURE: Arrow Functions

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const Turkey = percentageOfWorld3(84);
const China = percentageOfWorld3(1441);
const Russia = percentageOfWorld3(144);

// ----------------------------------------------------------------

// LECTURE: Introduction to Arrays
// const population = [84, 1441, 144, 5];
// console.log(`Turkey population ${population[0]}`);
// console.log(`China population ${population[1]}`);
// console.log(`Russia population ${population[2]}`);
// console.log(`Norway population ${population[3]}`);

// ----------------------------------------------------------------

// LECTURE: Basic Array Operations (Methods
const neighbours = [
  "Greece",
  "Bulgaria",
  "Georgia",
  "Armenia",
  "Iran",
  "Iraq",
  "Azerbaijan",
  "Syria",
];

console.log(neighbours);
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (neighbours.includes("Germany")) {
  console.log("..");
} else {
  console.log("Probaly not a central European country");
}

console.log(neighbours.indexOf("Syria"));

neighbours.indexOf("Syria");
neighbours[7] = "Republic of Sweden";
console.log(neighbours);

// ----------------------------------------------------------------

// LECTURE: Introduction to Objects
const myCountry = {
  country: "Turkey",
  capital: "Ankara",
  language: "Turkish",
  population: 84,
  neighbours: [
    "Greece",
    "Bulgaria",
    "Georgia",
    "Armenia",
    "Iran",
    "Iraq",
    "Azerbaijan",
    "Syria",
  ],
  describe: function () {
    return `${this.country} has ${this.population} million people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital} `;
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

// ----------------------------------------------------------------
// LECTURE: Dot vs. Bracket Notation

console.log(
  `${myCountry["country"]} has ${myCountry["population"]} million people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry["capital"]} `
);

console.log(
  `${myCountry.country} has ${myCountry.population + 2} million people, ${
    myCountry.neighbours.length
  } neighbouring countries and a capital called ${myCountry.capital} `
);

console.log(
  `${myCountry.country} has ${myCountry.population - 2} million people, ${
    myCountry.neighbours.length
  } neighbouring countries and a capital called ${myCountry.capital} `
);

// ----------------------------------------------------------------
// LECTURE: Object Methods
myCountry.describe();
console.log(myCountry.describe());
// checkIsIsland
console.log(myCountry);

// ----------------------------------------------------------------
// LECTURE: Iteration: The for Loop

for (i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}
// ----------------------------------------------------------------
// LECTURE: Looping Arrays, Breaking and Continuing
let populations = [84, 1441, 144, 5];
let percentageOfWorld4 = [];

for (let i = 0; i <= populations.length - 1; i++) {
  percentageOfWorld4.push(percentageOfWorld3(populations[i]));
}
// ----------------------------------------------------------------
// LECTURE: Looping Backwards and Loops in Loops -- Bunu yapamadım daha sonra göz at! --

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

// LECTURE: The while Loop
const percentages3 = [];
let i = 0;
while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3);
