async function TryCatchFinallyBlocl(x){
    try {
        if (x == "") throw "is empty";
        if (isNaN(x)) throw "is not a number";
        x = Number(x);
        if (x > 10) throw "is too high";
        if (x < 5) throw "is too low";
        console.log("no error");
      } catch (err) {
          console.log("Error: " + err + ".");
      } finally {
          console.log("I am in finally block ");
      }
}

let x = ''; 
/* Possible Values for x
x='' - Error Empty string
x = 1 - Error "number is to low"
x = 11 - Error "number is to  High"
x = 'shan' - Error "is not a number"
x=10 - no error 
*/
TryCatchFinallyBlocl(x);


