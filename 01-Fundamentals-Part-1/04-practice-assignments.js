// --------------------------------------------------------------------------------------

// LECTURE: Values and Variables
const country = "Turkey";
const continent = "Middle East";
let population = 81;

console.log(country); //"Turkey"
console.log(continent); //"Middle East"
console.log(population); // 81

// LECTURE: Data Types
const isIsland = false;
let language;

console.log(typeof country); //string
console.log(typeof continent); // string
console.log(typeof population); // number
console.log(typeof isIsland); // boolean
console.log(typeof language); // undefined

// LECTURE: let, const and var
language = "Turkish";

// LECTURE: Basic Operators
console.log(population / 2); //40.5
population++;
console.log(population); //82
console.log(population > 6); //true
console.log(population < 33); //false
const description1 = console.log(
  country +
    " is in " +
    continent +
    ", and its" +
    population +
    " million people speak " +
    language
);
//Turkey is in Middle East, and its 81 million people speak Turkish

// LECTURE: Strings and Template Literals
console.log(
  `${country} is in ${continent}, and its ${population} million people speak ${language}`
);

// LECTURE: Taking Decisions: if / else Statements
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is below average`);
}

// LECTURE: Type Conversion and Coercion
"9" - "5"; //4
"19" - "13" + "17"; //617
"19" - "13" + 17; //23
"123" < 57; //false
5 + 6 + "4" + 9 - 4 - 2; //"1149"

// LECTURE: Equality Operators: == vs. ===

// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have ?")
// );

// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// LECTURE: Logical Operators
// Sarah is looking for a new country to live in. She wants to live in acountry that speaks english, has less than 50 million people and is not an island.

if (language === "english" && population < 50 && isIsland === false) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria.`);
}

// LECTURE: The switch Statement

let languages = prompt("input a language");

switch (languages) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too");
}

// LECTURE: The Conditional (Ternary) Operator
console.log(
  population > 33
    ? `${country}'s population is above average`
    : `${country}'s population is below average`
);
