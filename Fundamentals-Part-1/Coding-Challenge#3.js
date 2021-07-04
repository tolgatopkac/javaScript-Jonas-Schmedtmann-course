/* Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
 */

// Data : 1
const avgDolphins = (96 + 108 + 89) / 3;
const avgKoalas = (88 + 91 + 110) / 3;
// Output : Koalas are win
// Data 2
const avgDolphins = (97 + 112 + 101) / 3;
const avgKoalas = (109 + 95 + 123) / 3;

// Data 3
const avgDolphins = (97 + 112 + 81) / 3;
const avgKoalas = (109 + 95 + 86) / 3;

if (avgDolphins > avgKoalas) {
  console.log(`Dolphins are win. Score : ${avgDolphins.toFixed(2)}`);
} else if (avgKoalas > avgDolphins) {
  console.log(`Koalas are win. Score : ${avgKoalas.toFixed(2)}`);
} else {
  console.log("Draw");
}

// DATA 1 : Dolphins are win. Score : 97.67

// Bonus 1
if (avgDolphins > avgKoalas && avgDolphins >= 100) {
  console.log(`Dolphins are win. Score : ${avgDolphins.toFixed(2)}`);
} else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
  console.log(`Koalas are win. Score : ${avgKoalas.toFixed(2)}`);
} else {
  console.log("Draw");
}

// Bonus 2
if (avgDolphins > avgKoalas && avgDolphins >= 100) {
  console.log(`Dolphins are win. Score : ${avgDolphins.toFixed(2)}`);
} else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
  console.log(`Koalas are win. Score : ${avgKoalas.toFixed(2)}`);
} else if (
  avgDolphins === avgKoalas &&
  avgDolphins >= 100 &&
  avgDolphins >= 100
) {
  console.log("Draw");
} else {
  console.log("No one win");
}
