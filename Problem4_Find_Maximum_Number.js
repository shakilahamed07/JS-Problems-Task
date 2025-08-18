// Array to Find Maximum Number

const MaximumNumber = (array) =>{
    let max = array[0];
    for(let i = 1; i <array.length; i++){
        if (array[i] > max) {
            max = array[i];          
        }
    }

    console.log(max)
}

MaximumNumber([5,9,3,4])