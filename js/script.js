
function mainFunctClick() {
    function mainFunct(a, b, c, Xn, Xk, Xd) {
        let F;
    for ( let x = Xn; x <= Xk; x += Xd) {
        if (x < 1 && c !== 0) {
            F = (-a) * Math.pow(x,2) - 2*b;
        } else if (x > 3 && c === 0) {
            F = ((x-a)/x);
        } else {
            F = (-3*x/b);
        }
        return F;
    }
    return 'try next time';
}
alert(mainFunct(+prompt(`Введите: a`), +prompt(`Введите: b`), +prompt(`Введите: c`), +prompt(`Введите: Xn`), +prompt(`Введите: Xk`), +prompt(`Введите: Xd`)));
}
