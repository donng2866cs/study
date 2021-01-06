let count = 0;
let count2 = 0;
function fibonacci(n) {
    if (n === 0 || n === 1) return n;
    count++
    return fibonacci(n - 1) + fibonacci(n - 2)
}
console.log(fibonacci(7));

function fibonacci2(n) {
    let dp = [0, 1];

    for (let i = 2;i <= n;i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
        count2++;
    }

    return dp[n]
}

console.log(fibonacci2(7));

console.log(count, count2);
