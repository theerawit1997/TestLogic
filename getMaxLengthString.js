function getMaxLengthString(arr) {
    let max = 0;
    let maxString = "";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > max) {
        max = arr[i].length;
        maxString = arr[i];
      }
    }
    return "max:" + max + " String:" + maxString;
  }
  
  let tmp = ['1234','as','abcde'];
  console.log(getMaxLengthString(tmp));