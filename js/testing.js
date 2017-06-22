function countChar(str, letter){
  var count = (str.match(/letter/) || []).length;
  console.log(count);
}


console.log(countChar("kakkerlak", "k"));
// → 4
