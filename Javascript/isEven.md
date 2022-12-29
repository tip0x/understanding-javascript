Given an integer value num, determine if it is even.

If it is even, return true. Return false otherwise.

Example Usage:

console.log( isEven(1) ); // false
console.log( isEven(4) ); // true

```function isEven(num) {
  // Return true if the num value is divisible by 2, false otherwise
  return num % 2 === 0 ? true : false;
}

console.log(isEven(1)); // false
console.log(isEven(4)); // true
```