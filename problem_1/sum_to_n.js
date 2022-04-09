/**
 * Provide 3 unique implementations of the following function.

**Input**: `n` - any integer

*Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`*.

**Output**: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`.
 */

// Using a simple for loop
var sum_to_n_a = function(n) {
    var sum = 0;
    for (var i = n; i >= 1; i--) {
        sum += i;
    }
    return sum;
};
console.log("Using a simple for loop: " + sum_to_n_a(5));
console.assert(sum_to_n_a(5) === 15);

// Using a Formula
var sum_to_n_b = function(n) {
    return n * (n + 1) / 2;
}
console.log("Using a Formula: " + sum_to_n_b(5));
console.assert(sum_to_n_b(5) === 15);

// Using a Recursive Function
var sum_to_n_c = function(n) {
    if (n <= 1)
        return n;
    return n + sum_to_n_c(n - 1);
}
console.log("Using a Recursive Function: " + sum_to_n_c(5));
console.assert(sum_to_n_c(5) === 15);
