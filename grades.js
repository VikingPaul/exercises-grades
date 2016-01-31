var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var f=0
var d=0
var c=0
var b=0
var a=0
var lowest=100
var highest=0

for (var i = 0; i < scores.length; i++) {
  if (scores[i] > 90) {
    a++
    if (highest<scores[i]) {
      highest=scores[i]
    };
  } else if (scores[i] > 80) {
    b++
  } else if (scores[i] > 70) {
    c++
  } else if (scores[i] > 60) {
    d++
  } else {
    f++
    if (lowest>scores[i]) {
      lowest=scores[i]
    };
  }
};
console.log("A's", a);
console.log("B's", b);
console.log("C's", c);
console.log("D's", d);
console.log("F's", f);
console.log("Highest grade:", highest);
console.log("Lowest grade:", lowest);