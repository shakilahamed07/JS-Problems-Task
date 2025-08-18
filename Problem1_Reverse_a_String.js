// Reverse a string

const ReverseString = (str) => {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  console.log(rev)
};

ReverseString("Shakil") // likahS
