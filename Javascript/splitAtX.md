Let's find the longer half of the string before and after the x!

First, you'll need to find the lower-case x.

Once you've found the x, split the string in half. The first half will be the string before the x, the second half will be the string after the x.

Take the longer string and return it!

This will be a tough function to write! Using everything you learned, you will be able to accomplish it. (You got this! )

Examples:

splitAtX("Happyxdays"); // "Happy"
splitAtX("10xDeveloper"); // "Developer"
 For the string "Happyxdays", we would look at the two strings before and after the x: "Happy" and "days". "Happy" is longer, so we would return it.

 you will need to define the findFirstX function before you try to use it in the splitAtX function.

 ```function findFirstX(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'x') {
      return i;
    }
  }
  return -1;
}
```

```function splitAtX(string) {
  const xIndex = findFirstX(string);
  if (xIndex === -1) {
    return string;
  }
  const firstHalf = string.slice(0, xIndex);
  const secondHalf = string.slice(xIndex + 1);
  if (firstHalf.length > secondHalf.length) {
    return firstHalf;
  }
  return secondHalf;
}
```