/* global describe it */
var postcss = require('postcss')
var expect  = require('chai').expect
var plugin = require('../')

var test = (input, output, opts, done)  => {
	postcss([ plugin(opts) ]).process(input).then((result) => {
		expect(result.css).to.eql(output)
		expect(result.warnings()).to.be.empty
		done()
	}).catch((error) => done(error))
}

describe('postcss-caralho', function () {

	it('converts !caralho to !important', (done) =>
        test('a{ color: #000 !caralho; }', 'a{ color: #000 !important; }', {}, done))

	it('converts !merda to !important', (done) =>
        test('a{ color: #000 !merda; }', 'a{ color: #000 !important; }', {}, done))

	it('converts !desculpa to !important', (done) =>
        test('a{ color: #000 !desculpa; }', 'a{ color: #000 !important; }', {}, done))

	it('converts !merda to !important', (done) =>
        test('a{ color: #000 !merda; }', 'a{ color: #000 !important; }', {}, done))

	it('converts !putaqpariu to !important', (done) =>
        test('a{ color: #000 !putaqpariu; }', 'a{ color: #000 !important; }', {}, done))

	it('converts !desisto to !important', (done) =>
        test('a{ color: #000 !desisto; }', 'a{ color: #000 !important; }', {}, done))

	it('converts !fuckthis to !important', (done) =>
        test('a{ color: #000 !fuckthis; }', 'a{ color: #000 !important; }', {}, done))

	it('converts !fuck to !important', (done) =>
        test('a{ color: #000 !fuck; }', 'a{ color: #000 !important; }', {}, done))

	it('converts !sorry to !important', (done) =>
        test('a{ color: #000 !sorry; }', 'a{ color: #000 !important; }', {}, done))
})
