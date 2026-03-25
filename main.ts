/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Angelica RO
 * Created on: Mar 2026
 * This program moves a servo
*/

// variables
const servoNumber1 = robotbit.Servos.S3

// setup
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    robotbit.Servo(servoNumber1, 0)
    basic.clearScreen()
    basic.showString('0')
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Yes)
})

input.onButtonPressed(Button.B, function () {
    robotbit.Servo(servoNumber1, 180)
    basic.clearScreen()
    basic.showString('180')
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Yes)
})