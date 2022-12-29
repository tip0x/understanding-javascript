#### Looking up Characters
In JavaScript, you can look up characters in strings by index. There are two ways to do this: with charAt or square brackets ([]).

Let's see some examples:

"Hello".charAt(1); // e
"Hello"[1]; // e
 In both of these examples we are looking up the character at the 1 index, which turns out to be the character e.

Hello

Strings use zero-based indexing. This means the index of the first character is 0 and moves up 1 for each subsequent character.

 Your Goal: Complete the Function
Complete the startsWithX function to determine if the first character of the string argument is the lower-case x.

If the first character is x return true. If not, return false.

console.log( startsWithX("x") ); // true
console.log( startsWithX("zyx") );  // false

```function startsWithX(str) {
  // Return true if the first character of the string is the lower-case x, false otherwise
  return str.charAt(0) === 'x' || str[0] === 'x' ? true : false;
}

console.log(startsWithX("x")); // true
console.log(startsWithX("zyx")); // false
```
#### Starts With Casing
Let's update our startsWithX function to return true for an upper-case X as well as a lower-case x.

 Some examples!

console.log( startsWithX("Xylophones") ); // true
console.log( startsWithX("x") ); // true
console.log( startsWithX("spaceX") ); // false

```function startsWithX(string) {
  return string[0] === 'x' || string[0] === 'X';
}
```

#### Ends With X
Complete the endsWithX function by detecting if the last character in the string is a lower-case x or an upper-case X. Return true if it is, false if not.

```function endsWithX(string) {
    return string[string.length - 1] === 'x' || string[string.length - 1] === 'X';
}
module.exports = endsWithX;
```

#### Is All X
Complete the function isAllX to determine if the entire string is made of lower-case x or upper-case X. Return true if they are, false if not.

Examples:
```
function isAllX(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== 'x' && string[i] !== 'X') {
      return false;
    }
  }
  return true;
}

isAllX("Xx"); // true
isAllX("xAbX"); // false
```