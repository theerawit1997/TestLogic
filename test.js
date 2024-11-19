function FindDuplicateByLoop(ArrayOrigin) {
  //let ArrayOrigin = [12, 123, 124, 123, 122, 130,124, 150, 167,10];
  let ArrayModify = [];
  let CheckDuplicate = false;

  for (let j = 0; j < ArrayOrigin.length; j++) {
    for (let k = 0; k < ArrayModify.length; k++) {
      if (ArrayOrigin[j] == ArrayModify[k]) {
        CheckDuplicate = true;
      }
    }
    if (CheckDuplicate == false) {
      ArrayModify.push(ArrayOrigin[j]);
    }
    CheckDuplicate = false;
  }

  return ArrayModify;
}
function SortArrayByLoop(ArrayOrigin){
    let ArrayModify = ArrayOrigin;
    for (let i = 0; i < ArrayModify.length; i++) {
        for (let j = 0; j < ArrayModify.length - i - 1; j++) {
            if (ArrayModify[j] > ArrayModify[j + 1]) {
                // Swap
                let temp = ArrayModify[j];
                ArrayModify[j] = ArrayModify[j + 1];
                ArrayModify[j + 1] = temp;
            }
        }
    }
    return ArrayModify;
}

function MatchArrayByLoop(ArrayOrigin) {
  //let ArrayOrigin = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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


let Array1 = [1, 1, 2, 3, 4, 8, 9, 4, 5, 6, 3, 7];
Array1 = FindDuplicateByLoop(Array1);
console.log(Array1);
Array1 = SortArrayByLoop(Array1);
console.log(Array1);
Array1 = MatchArrayByLoop(Array1);
console.log(Array1);
