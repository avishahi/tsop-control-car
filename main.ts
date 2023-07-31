STEMROBO.setup()
makerbit.connectIrReceiver(DigitalPin.P16, IrProtocol.Keyestudio)
basic.forever(function () {
    if ("0x00FF601F" == makerbit.irDatagram()) {
        STEMROBO.moveIt(MOVE.forward)
    } else if ("0x00FF205F" == makerbit.irDatagram()) {
        STEMROBO.moveIt(MOVE.backward)
    } else if ("0x00FF304F" == makerbit.irDatagram()) {
        STEMROBO.moveIt(MOVE.left)
    } else if ("0x00FF502F" == makerbit.irDatagram()) {
        STEMROBO.moveIt(MOVE.right)
    } else if ("0x00FF245B" == makerbit.irDatagram()) {
        STEMROBO.moveIt(MOVE.stop)
    } else {
        basic.showIcon(IconNames.No)
    }
})
