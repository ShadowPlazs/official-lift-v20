let Lift_Reset_Counter = 0
let Floors_Counter = 0
input.onPinPressed(TouchPin.P0, function () {
    Lift_Reset_Counter = 0
    Floors_Counter = 0
    basic.showString("ALL COUNTERS:")
    basic.showString("1. LIFT RESET COUNTER")
    basic.showNumber(Lift_Reset_Counter)
    basic.showString("2. FLOORS COUNTER")
    basic.showNumber(Floors_Counter)
})
input.onButtonPressed(Button.A, function () {
    Floors_Counter += 1
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.showString("GOING UP… ")
    basic.pause(5000)
    basic.showString("CURRENT FLOOR:")
    basic.showNumber(Floors_Counter)
})
input.onGesture(Gesture.FreeFall, function () {
    music.playMelody("C E D G E G A C5 ", 1500)
    basic.showString("CLEARING ALL ACTIONS IN QUEUE… PLEASE WAIT!")
    basic.pause(100)
    basic.clearScreen()
    music.playMelody("C E D G E G A C5 ", 120)
    basic.pause(5000)
    music.stopAllSounds()
})
input.onPinPressed(TouchPin.P2, function () {
    Floors_Counter = 0
    basic.clearScreen()
    basic.showString("EMERGENCY STOP: ENABLED")
    basic.showString("FLOOR:")
    basic.showNumber(Floors_Counter)
})
input.onButtonPressed(Button.AB, function () {
    Floors_Counter = 0
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . # . # .
        . . # . .
        `)
    basic.showString("GOING DOWN… (GROUND 0)")
    basic.pause(5000)
    basic.showString("CURRENT FLOOR:")
    basic.showNumber(Floors_Counter)
})
input.onButtonPressed(Button.B, function () {
    Floors_Counter += -1
    basic.showNumber(Floors_Counter)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showString("GOING DOWN…")
    basic.pause(5000)
    basic.showString("CURRENT FLOOR:")
    basic.showNumber(Floors_Counter)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showString("LIFT RESET: STARTING…")
    Lift_Reset_Counter += 1
    basic.showString("LIFT RESETS:")
    basic.showNumber(Lift_Reset_Counter)
})
basic.forever(function () {
    basic.pause(90000)
    basic.showString("WELCOME!")
})
