import * as boxa from './boxa'
import * as boxb from './boxb'
import boxc from './boxc'
import hi from './hi'

export default (bit, box) => {
	return box('bitbox-sketch-depless', null, [
		box(boxa, {
			type: 'boxa',
			name: 'named export bitbox module'
		}, [1, 2, 3]),
		box(boxc, {
			type: 'boxc',
			name: 'default export bitbox module'
		}),
		box(boxb, {
			type: 'boxb',
			name: 'bar-demo'
		}, [
			box('ul', null, [
				box('li', null, 'One'),
				box('li', null, 'Two'),
				box('li', null, 'Three')
			])
		]),
		box('span', null, box(hi, {
			name: 'Serebano'
		})),
		box(hi, { name: 'Dev' })
	])
}
