input.onButtonPressed(Button.A, function () {
    IR.sendMyMessage1("Button A Pressed", 30, IR.encodingType.NEC)
})
IR.setIR_pin(
AnalogPin.P8
)
basic.showIcon(IconNames.Cow)
basic.forever(function () {
	
})
