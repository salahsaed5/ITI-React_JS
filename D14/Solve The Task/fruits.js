var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

const every = fruits.every((i) => typeof i === "string");
const some = fruits.some((i) => i.startsWith("a"));
const filter = fruits.filter((i) => {
    return i.startsWith("a") || i.startsWith("s");
});
const map = fruits.map((i) => `I wanna ${i}`);

console.log(every);
console.log(some);
console.log(filter);
console.log(map);

fruits.forEach((i) => console.log(i));