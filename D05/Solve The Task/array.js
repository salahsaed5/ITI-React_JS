var arr = [];
for (var i=0;i<5;i++) {
var value = parseInt(prompt("Enter 5 value"));
arr.push(value);

}
console.log("%cyou have entered:","colored:red",arr);
function sorted (a,b){
return a-b ;

}
arr.sort(sorted)
console.log("%cSorted array in ascending:","color:red",arr);
console.log("%cSorted array in descending:","color:red",arr.reverse());