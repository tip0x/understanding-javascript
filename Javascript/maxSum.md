The function maxSum takes a number argument num.

Your goal is find the sum all of numbers, starting from 1, up to and including num.

For example, if num is 5, your sum would be 1 + 2 + 3 + 4 + 5 or 15.

```function maxSum(num) {
  // Initialize a variable to store the running total
  let sum = 0;

  // Loop through the range of numbers from 1 to num
  for (let i = 1; i <= num; i++) {
    // Add the current number to the running total
    sum += i;
  }

  // Return the final sum
  return sum;
}

console.log(maxSum(5)); // 15
```