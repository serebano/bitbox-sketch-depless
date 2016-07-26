/** bitbox
    Default export module, state & signals as component function properties
    */

// (1)
demo.state = {
    value: 'some.value.path'
}

// (2)
demo.signals = {
    mouseMoved: 'app.mouseMoved',
    buttonClicked() {}
}

// (3)
export default function demo(bit, box) {

    const {
        message = 'Wazzup?',
        mouseMoved
    } = bit

    return box('demo-props', {
        style: {
            padding: 24,
            border: `1px solid grey`
        }
    }, `Simple component`)
}
