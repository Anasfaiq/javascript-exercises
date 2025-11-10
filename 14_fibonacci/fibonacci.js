const fibonacci = function(n) {
  // Convert string input to number
  n = Number(n);

  // Handle negative input
  if (n < 0) return "OOPS";
  
  // Base cases
  if (n === 0) return 0;
  if (n === 1) return 1;

  // Initialize first two Fibonacci numbers
  let a = 0, b = 1, temp;

  // Calculate Fibonacci iteratively
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
