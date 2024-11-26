function Palindrome(str) {
    const arr = str.split("");
    for (let i = 0; i < arr.length / 2; i++) {
      if (arr[i] !== arr[arr.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  console.log("ABC:" + Palindrome("ABC"));
  console.log("ABA:" + Palindrome("ABA"));
  console.log("ABCAB:" + Palindrome("ABCAB"));
  console.log("ABCCBA:" + Palindrome("ABCCBA"));