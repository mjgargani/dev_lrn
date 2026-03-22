#!/usr/bin/env php
<?php

// Initial PHP learning w/ factorial algorithms
// Factorial: f = n * n - 1 * n - 2 * ... 1 ( n > 1 )

// 1. Recursive way (UNIVESP - S.2)
function recursive_factorial($n) {
  if($n <= 1) {
    return 1;
  } else {
    return recursive_factorial($n - 1) * $n;
  }
}

// Example:
echo recursive_factorial(5) . "\n"; // > 120

// 2. Iterative way (PHP)
function iterative_factorial($n) {
  $result = 1;
  for($i = 1; $i <= $n; $i++) {
    $result *= $i;
  }
  // The for loop iterates from 1 to n,
  // multiplying each integer to the result variable.
  // Finally, it returns the computed factorial.
  return $result;
}

// Example:
echo iterative_factorial(5) . "\n"; // > 120

?>