function FizzBuzz (){
    for (let index = 1; index <= 100; index++) {
        if(index%3==0&&index%5==0){
            console.log("index:"+index+"  FizzBuzz");
        }
        else if(index%3==0){
            console.log("index:"+index+"  Fizz");
        }
        else if(index%5==0){
            console.log("index:"+index+"  Buzz");
        }
    }
}

FizzBuzz();