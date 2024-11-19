function FindDuplicateByLoop(ArrayOrigin) {
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

let Array1 = [1, 1, 2, 3, 4, 8, 9, 4, 5, 6, 3, 7];
Array1 = FindDuplicateByLoop(Array1);
console.log(Array1);