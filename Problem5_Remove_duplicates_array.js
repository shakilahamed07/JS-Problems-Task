// Remove Duplicates from an Array

const RemoveDuplicate = (array) =>{
    let newArray = [];
    for(let i = 1; i <array.length; i++){
        if (!newArray.includes(array[i])) {
            newArray.push(array[i])         
        }
    }

    console.log(newArray)
}

RemoveDuplicate([5,9,3,4,3,5])