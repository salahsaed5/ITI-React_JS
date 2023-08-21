var data = prompt(`Enter some string`);

var choice = prompt(`Do you care about characters' case? (y/n)`);

if (choice === "n") {
  data = data.toLowerCase();
}

var s = 0;
var l = data.length - 1;

while (data.charAt(s) === data.charAt(l) && s < l) {
  s++;
  l--;
}

var isPal = false;

if (s >= l) {
  isPal = true;
}

console.log(`s = ${s} && l = ${l}`);

if (isPal === true) {
  document.write(`String is pailndrome`);
} else {
  document.write(`String is not pailndrome`);
}