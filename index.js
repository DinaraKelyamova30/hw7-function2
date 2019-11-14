//геометрична прогресія
function f(n, q) {
    sum = 0;
    i = 0;
    b1 = 1;
    while (i < n) {
        sum = sum + b1;
        b1 = b1 * q;
        i = i + 1;
    }
    return sum
}
console.log(f(5, 2));
console.log(f(4, 3));