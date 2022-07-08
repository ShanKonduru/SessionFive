let x = 'shan';
try {
  if (x == "") throw "is empty";
  if (isNaN(x)) throw "is not a number";
  x = Number(x);
  if (x > 10) throw "is too high";
  if (x < 5) throw "is too low";
} catch (err) {
    console.log("Error: " + err + ".");
} finally {
    console.log("I am in finally block ");
}