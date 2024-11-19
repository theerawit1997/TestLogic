function MatchArrayByLoop(ArrayOrigin) {
  let ArrayModify = [];

  for (let i = 0; i < ArrayOrigin.length; i++) {
    for (let j = i + 1; j < ArrayOrigin.length; j++) {
      // if(((ArrayOrigin[i]%2)==0)||((ArrayOrigin[j]%2)==0)){
      ArrayModify.push([ArrayOrigin[i], ArrayOrigin[j]]);
      // }
    }
  }

  return ArrayModify;
}

let Array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Array1 = MatchArrayByLoop(Array1);
console.log(Array1);
