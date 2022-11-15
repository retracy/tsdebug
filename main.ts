let data = [
  {
    name: "a",
    val: 1,
  },
  {
    name: "b",
    val: 2,
  },
];

let x = data.find(n => n.name.includes('a')).val
console.log(x);
