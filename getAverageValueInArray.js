function getAverageValueInArray(arr) {
    let average = 0;
    let sum = 0;
    let length = arr.length;
    for (let index = 0; index < arr.length; index++) {
      sum = sum + arr[index];
    }
    average = sum/length;
    return average;
  } 
  
  const thisarry = [1,2,3,4,5];
  console.log(getAverageValueInArray(thisarry));