// Find Even Numbers in an Array

const EvenChecker = (array) =>{
    let newArray = [];
    for(let i = 0; i <array.length; i++){
        if (array[i] % 2 === 0) {
            newArray.push(array[i])
        }
    }
    console.log(newArray)
}

EvenChecker([1,2,3,4,5,6])