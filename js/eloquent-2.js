var Hashtag = "";

for (i = 1; i < 8; i++) {
    Hashtag +="#";
    console.log(Hashtag);
}

for (i = 1; i < 101; i++) {
    console.log(i);
  // if the number is divisible by 3, write "Fizz"
 if ( i % 3 === 0 && i % 5 === 0) {
   console.log("FizzBuzz"); }
 // if the number is divisible by 5, write "Buzz"
 else if ( i % 3 === 0) {
   console.log("Fizz"); }
   // otherwise, write just the number
 else if ( i % 5 === 0) {
     console.log("Buzz"); }
 else {
   console.log(i);
 }
}

for (i = 1; i < 8; i++) {
  if(i % 2 == 0)
{
   console.log("# # # # ");
}
else
{
console.log(" # # # #");
}

}
