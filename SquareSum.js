function SquareSum(arr) {
  if (arr.length < 1) {
    console.log("Array Is Empty ");
    return null;
  }
  let first = arr[0];
  let last = arr[1];
  let SqFirst = first * first;
  let SqLast = last * last;
  let sum = SqFirst + SqLast;
  return sum;
}

let array = [];
let result = SquareSum(array);

console.log("Result = ", result);
