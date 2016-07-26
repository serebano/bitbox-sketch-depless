/** computed state
    */
export default (compute) => {
    return compute(props => ({
        filter: 'app.filter.active',
        items: 'app.items'
    }), state => {
        return Object.keys(state.items)
            .filter(item => state.items[item].type === state.filter)
    })
}
