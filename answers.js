// DAY 1
function factorial(n) {
    if (n == 1) {
        return n
    }
    return n * factorial(n - 1)
}
// DAY 2
function gcd(n1, n2, i = Math.ceil(n1 > n2 ? n1 : n2)) {
    if (n1 % i == 0 && n2 % i == 0) {
        return i
    }
    return gcd(n1, n2, i - 1)
}

// DAY 2 Refactor:
function gcd(n1, n2) {
    if (!n2) {
        return n1
    }
    return gcd(n2, n1 % n2)
}