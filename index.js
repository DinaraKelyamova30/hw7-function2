function f(n, g) {
    b1 = 1;
    for (let i = 1; i <= n; i++) {
        b1 *= g;
    }
    return (b1);
}

console.log(f(5, 2));
console.log(f(4, 3));