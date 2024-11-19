const floor = 5;
const num = 5;

for (let i = 1; i <= floor; i++) {
  let tmp = "";
  for (let k = i; k <= num; k++) {
    tmp += "*";
  }
  console.log(tmp);
}

console.log(''); //br

for (let i = 1; i <= floor; i++) {
  let tmp = "";
  for (let l = 1; l <= i; l++) {
    tmp += "*";
  }
  console.log(tmp);
}

console.log(''); //br

for (let i = 1; i <= floor; i++) {
  let tmp = "";
  for (let j = 1; j <= num; j++) {
    if (j % 2 == 1) {
      for (let k = i; k <= num; k++) {
        tmp += "*";
      }
    } else {
      for (let l = 1; l <= i; l++) {
        tmp += "*";
      }
    }
    tmp += " ";
  }
  console.log(tmp);
}
