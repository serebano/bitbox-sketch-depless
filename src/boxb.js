/** bitbox
    Named export module (computed), { state, signals, component }
    */

import filteredKeys from './compb'

/** select state
    @arg { type, color } = props
    */
export function state(props, compute) {
    return {
        name: `app.title`,
        uid: `app.config.uid`,
        count: `counter.value`,
        itemKeys: filteredKeys(compute)(),
    }
}

/** extract signals
    @arg { type, color, name, uid, itemKeys } = props
    */
export function signals(props, signals) {
    return {
        buttonClicked(e) {
            return signals.foo.buttonClicked({
                uid: props.uid
            })
        },
        mounted: 'app.mounted',
        clicked: 'counter.incremented'
    }
}

/** component(bit, box) => box('button', { onClick: bit.clicked }, bit.count)
    @arg { type, color, name, uid, itemKeys, buttonClicked, mounted } = props

    *** Hello!
    const hello = (bit, box) => box('h3', `Hello ${bit.name}`)
    <hello name="Serebano" />
    */
export function component(props, box) {
    return box('boxb-demo', {
        style: {
            padding: 24,
            fontSize: 22,
            fontWeight: 500,
            border: `1px solid green`,
            color: props.color
        }
    }, [
        box('h1', null, `${props.type} - ${props.name}`)
    ])
}
