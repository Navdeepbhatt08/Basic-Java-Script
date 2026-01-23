const nums = [1, 3, 5, 6, 8];

//Map Function

const mult = nums.map((num, i, arr) => {
  return num * 3;
});

//Filter

const moreThanTwo = nums.filter((num1) => {
  return num1 > 2;
});

//Reduce

const sum = nums.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);

console.log(mult);
console.log(moreThanTwo);
console.log(sum);
