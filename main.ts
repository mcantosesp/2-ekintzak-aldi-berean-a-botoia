input.onButtonPressed(Button.A, function () {
    Hasiera = 1
})
input.onButtonPressed(Button.B, function () {
    Hasiera = 0
})
let Hasiera = 0
DFRobotMaqueenPlus.I2CInit()
Hasiera = 0
basic.forever(function () {
    while (Hasiera == 1) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.GREEN)
        basic.pause(1000)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
        basic.pause(500)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.WHITH)
        basic.pause(1000)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
        basic.pause(500)
    }
})
basic.forever(function () {
    while (Hasiera == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 30)
        basic.pause(1000)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        basic.pause(500)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 30)
        basic.pause(1000)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        basic.pause(500)
    }
})
basic.forever(function () {
    while (Hasiera == 1) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Forever)
        basic.pause(1000)
        music.stopMelody(MelodyStopOptions.All)
        basic.pause(500)
        music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Forever)
        basic.pause(1000)
        music.stopMelody(MelodyStopOptions.All)
        basic.pause(500)
    }
})
