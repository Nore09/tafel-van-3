let getal = 0
basic.forever(function () {
    if (getal < 12) {
        getal += 3
        basic.pause(100)
    } else {
        getal = 0
    }
})
basic.forever(function () {
    basic.showNumber(getal)
})
