function creditCardValidator(number) {
    const numberArray = number.replaceAll(" ", "").split("").reverse().map(function(numbers, index){
    if(index%2 === 0){
      return numbers*2
    }
    return parseInt(numbers);
  });
  const numberArray2 = numberArray.map(function(newNumber){
    if(newNumber > 9){
      return parseInt(newNumber.toString().split("")[0])+parseInt(newNumber.toString().split("")[1]);
    }
      return newNumber;
  }); 
  return numberArray2.reverse();
}; 

console.log(creditCardValidator("4204 0707 8046 5320"));

//.split("")
//parsInt("277375883992") returns 277375883992
//parsInt("27").split("") returns [2,7]
// for(let i=15, i>=0, i-=1)
