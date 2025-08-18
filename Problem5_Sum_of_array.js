// Sum of All Numbers in an Array

const sumOfArray = (array) =>{
    let sum = 0;
    for(let i = 0; i <array.length; i++){
        sum += array[i]
    }

    console.log(sum)
}

sumOfArray([5,10,2,3])