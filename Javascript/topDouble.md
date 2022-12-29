#### Top Double
Using whichever loop you'd like, complete the top double function to find the largest double for the value that is below the top.

 This one is a bit tricky! You might double the value before realizing it is larger than top. You'll need to go back and return the value before that value that exceeds the top.
```function topDouble(value, top) {
  // Start with the value argument as the current double
  let currentDouble = value;

  // Keep doubling the current double until it is just below the top value
  while (currentDouble < top) {
    currentDouble *= 2;
  }

  // Return the previous double value
  return currentDouble / 2;
}

module.exports = topDouble;

```
