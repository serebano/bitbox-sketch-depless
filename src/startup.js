import test from './test'
import box from './box'

box(test, {
    /** app(state, modules) */
    '-app': null,
    /** parent dom node or selector to mount/render */
    '-parent': document.body,
    /** render this box to string */
    '-to-string': false,
    /** on render done callback,
        if -to-string=true callback argument is html string */
    '-on-render': (node) => {
        window.node = node
        console.log('-on-render', node)
    }
})




/** */
