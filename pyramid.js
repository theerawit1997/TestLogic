function pyramid(n) {
    let floor = n;
    //แทนคือแต่ละ floor โดยชั้นบนสุดคือ 1
    //space = n-i;
    //star = 2n-i;
    //width = 2(n-i)+(2n-i)
    for (let i = 1; i <= n; i++) {
      let tmp = "";
      let space = n - i; // 1 1=0 , 2 1=1 2=0 , 3 1=2 2=1 3=0
      let star = 2*i - 1; // 1=1 2=3 3=5 4=7
      for (let j = 0; j < space; j++) {
        tmp += " "
      }
      for (let k = 0; k < star; k++) {
        tmp += "*"
      }
      console.log(tmp);
    }
  }
  
  pyramid(3);
  