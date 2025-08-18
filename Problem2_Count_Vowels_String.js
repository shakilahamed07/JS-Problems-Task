// Count Vowels in a String

const CountVowels = (str) =>{
    let count = 0;
    const vowelsUppercase = "AEIOU";
    const vowelsLowercase = "aeiou";

    for(let i = 0;  i < str.length; i++ ){
        if(vowelsLowercase.includes(str[i]) || vowelsUppercase.includes(str[i])){
            count++
        }
    }

    console.log(count)
}

CountVowels('programming')