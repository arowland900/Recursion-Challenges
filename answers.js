// DAY 1:
function factorial(n) {
    if (n == 1) {
        return n
    }
    return n * factorial(n - 1)
}
// DAY 2:
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

// DAY 3:
function range(x, y, arr = []) {
    arr.push(x + 1)
    if (x == y - 2) {
        return arr
    }
    return range(x + 1, y, arr)
}

// DAY 3 Refactor:
function range(x, y) {
    if (x == y - 2) {
        return [y - 1]
    }

    var arr = range(x, y - 1)
    arr.push(y - 1)
    return arr
}

// DAY 4:
function sum(arr) {
    if (arr.length) {
        return arr.pop() + sum(arr)
    } else {
        return 0
    }
}

// DAY 5:
function e(num, exp) {
    if (exp > 0) {
        return num * e(num, exp - 1)
    } else {
        return 1
    }
}

// DAY 6:
function fibo(n) {
    if (n < 2) {
        return [0]
    }
    if (n == 2) {
        return [0, 1]
    }
    var arr = fibo(n - 1)
    arr.push((arr[n - 2] + arr[n - 3]))
    return arr
}