#!/usr/bin/env node

// Initial JS learning w/ factorial algorithms
// Factorial: f = n * n - 1 * n - 2 * ... 1 ( n > 1 )

// 1. Recursive way (UNIVESP - S.2)
function recursive_factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * recursive_factorial(n - 1);
}

// 2. Iterative way (JS)
function iterative_factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// create a array and populate it with random integers

const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

// 3. Reducer way (JS)
function reducer_factorial(n) {
  return Array
    .from({ length: n - 1 }, (_, i) => i + 2)
    .reduce((acc, val) => acc * val, 1);
  // Explaining the syntax and logic:
  // The param 'lenght' creates an array of size n-1
}

// Example:
console.log(recursive_factorial(5));  // > 120
console.log(iterative_factorial(5));  // > 120
console.log(reducer_factorial(5));    // > 120