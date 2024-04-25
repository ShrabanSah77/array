console.log("Welcome to 'Array' class.");

// Create

const firstArr = [];
const secondArr = new Array();
console.log({ firstArr, secondArr });

const thirdArr = [
  "prasadi",
  { name: "school" },
  "ccrc",
  "xyz",
  [5, 8],
  true,
  function age() {},
];

console.log(thirdArr);

// Read

console.log(thirdArr[3]);
console.log(thirdArr[1].name);

// Update

thirdArr[0] = "shraban";

// Delete

const [a, b, ...rest] = thirdArr;
console.log(rest);
const obj = { a: "shraban", b: "kumar", c: "sah" };

// use spread operator

const first = [1, 2, 3];
const second = [4, 5, 6];

const result = [...first, ...second];
console.log({ result });

// Loop and print all the values of the result array

for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}

// write a js array solution to add new element in the array

const testString = "1,2,3,4";
const results = testString.split(",");
console.log({ results });

