// Capitalize First Letter of Each Word

const CapitalizeFirstLetter = (str) => {
  let singleWords = str.split(" ")
  let result = [];

  for (let i = 0; i < singleWords.length; i++) {
    let word = singleWords[i];
    let capitalize = word[0].toUpperCase() + word.slice(1);
    result.push(capitalize);
  }
  
  console.log(result.join(" "));
};

CapitalizeFirstLetter("shakil ahmed");
