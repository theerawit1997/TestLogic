function SortArrayByLoop(ArrayOrigin) {
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

let Array1 = [1, 2, 3, 4, 8, 9, 5, 6, 7];
Array1 = SortArrayByLoop(Array1);
console.log(Array1);
