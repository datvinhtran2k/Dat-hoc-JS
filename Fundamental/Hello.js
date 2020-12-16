const obj = {
  name: "Sam",
  age: 4,
  classification: {
    kingdom: "Anamalia",
    class: "Manalia",
  },
};

obj.speak = function () {
  return "Meow!";
};
// console.log(obj.speak());

const a1 = [1, 2, 3, 4];
const a2 = [1, "two", 3, null];
const a3 = [
  "what the hammer? what the chain?",
  "in what furnace was thy brain?",
  "what the anvil? what dread grasp",
  "dare its deadly terrors clasp?",
];

const a4 = [
  { name: "Ruby", hardness: 0 },
  { name: "Diamond", hardness: 10 },
  { name: "Topaz", hardness: 8 },
];

const a5 = [
  [1, 3, 5],
  [2, 4, 6],
];

// extremely simple email recognizer
const email = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b/;

// US phone number recognizer
const phone = /(:?\+1)?(:?\(\d{3}\)\s?|\d{3}[\s-]?)\d{3}[\s-]?\d{4}/;

const now = new Date();
// console.log(now);
// console.log(now.getSeconds());

const numStr = "33.3";
const num = +numStr;
// console.log(num);

const a = parseInt("16 volts");

const n = 0;
const b = !n;

for (let key in obj) console.log(key);
