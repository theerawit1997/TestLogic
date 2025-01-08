function getMinValueInArray(arr) {
    let minvalue = 0;
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] < minvalue) {
        minvalue = arr[index];
      }
    }
    return minvalue;
  } 
  
  const thisarry = [1,2,3,4,5,6,7,8,-10,1,2,3,5,6,8,7,12,35,0,8];
  console.log(getMinValueInArray(thisarry));