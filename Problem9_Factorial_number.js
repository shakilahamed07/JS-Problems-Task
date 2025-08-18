//  Find the Factorial of a Number

const FactorialNumber = (num) =>{
    let result  = 1;
    for(let i = 1; i <= num; i++){
        result = result*i;
    }
    console.log(result)
}

FactorialNumber(5)