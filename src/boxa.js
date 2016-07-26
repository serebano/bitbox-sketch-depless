/** bitbox
    Named export module, { state, signals, component }
    */

// (1)
export const state = {
    message: 'user.message'
}

// (2)
export const signals = {
    mouseMoved: 'app.mouseMoved'
}

// (3)
export const component = (bit, box) => {

    const {
        message = 'Wazzup?',
        mouseMoved
    } = bit

    return box('simple-component', {
        style: {
            padding: 24,
            fontSize: 22,
            border: `1px solid green`
        }
    }, [
        message,
        box('hr')
    ])
}
