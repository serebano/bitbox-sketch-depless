export default function box(tag, attrs, children) {

    if (typeof tag === 'object' && 'component' in tag) {
        attrs = Object.assign({}, attrs, {
            state: tag.state,
            signals: tag.signals
        })
        tag = tag.component
    } else if (typeof tag === 'function') {
        if (tag.state)
            attrs.state = tag.state
        if (tag.signals)
            attrs.signals = tag.signals
    }

    const start = Date.now()

    if (arguments.length === 2 && (Array.isArray(attrs) || typeof attrs === 'string')) {
        children = attrs
        attrs = {}
    }

    const args = {}
    Object.keys(attrs || {}).forEach(akey => {
        if (akey.indexOf('-') === 0) {
            args[akey.substr(1)] = attrs[akey]
            delete attrs[akey]
        }
    })
    const props = Object.assign({}, attrs, { children })
    const node = { tag, props, args }

    if (typeof tag === 'function')
        node.instance = tag(props, box)

    if (args['parent']) {
        const parent = args['parent'] instanceof Element
            ? args['parent']
            : typeof args['parent'] === 'string'
                ? document.querySelector(args['parent'])
                : null
        const pre = document.createElement('pre')
        pre.innerHTML = JSON.stringify(node, null, 4)
        parent.appendChild(pre)
    }

    if (typeof args['on-render'] === 'function') {
        const timestamp = Date.now()
        const duration = timestamp - start
        args['on-render'](Object.assign({}, node, {
            start, duration, timestamp
        }))
    }

	return node
}
