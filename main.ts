let a = 0
basic.forever(function () {
    a = 0
    for (let index = 0; index < 5; index++) {
        led.plot(a, 4)
        basic.pause(75)
        a += 1
        basic.pause(75)
        basic.clearScreen()
    }
    for (let index = 0; index < 6; index++) {
        led.plot(a, 3)
        basic.pause(75)
        a += -1
        basic.pause(75)
        basic.clearScreen()
    }
    for (let index = 0; index < 6; index++) {
        led.plot(a, 2)
        basic.pause(75)
        a += 1
        basic.pause(75)
        basic.clearScreen()
    }
    for (let index = 0; index < 6; index++) {
        led.plot(a, 1)
        basic.pause(75)
        a += -1
        basic.pause(75)
        basic.clearScreen()
    }
    for (let index = 0; index < 6; index++) {
        led.plot(a, 0)
        basic.pause(75)
        a += 1
        basic.pause(75)
        basic.clearScreen()
    }
})
