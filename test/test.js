/* global describe it */
var postcss = require('postcss')
var expect = require('chai').expect
var plugin = require('../')

var test = (input, output, opts, done) => {
	postcss([plugin(opts)])
		.process(input)
		.then(result => {
			expect(result.css).to.eql(output)
			expect(result.warnings()).to.be.empty
			done()
		})
		.catch(error => done(error))
}

describe('postcss-caralho', function() {
	it('converts !caralho to !important', done =>
		test(
			'a{ color: #000 !caralho; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !merda to !important', done =>
		test(
			'a{ color: #000 !merda; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !desculpa to !important', done =>
		test(
			'a{ color: #000 !desculpa; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !merda to !important', done =>
		test(
			'a{ color: #000 !merda; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !putaqpariu to !important', done =>
		test(
			'a{ color: #000 !putaqpariu; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !desisto to !important', done =>
		test(
			'a{ color: #000 !desisto; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !fuckthis to !important', done =>
		test(
			'a{ color: #000 !fuckthis; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !fuck to !important', done =>
		test(
			'a{ color: #000 !fuck; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !sorry to !important', done =>
		test(
			'a{ color: #000 !sorry; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !foda-se to !important', done =>
		test(
			'a{ color: #000 !foda-se; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !scheisse to !important', done =>
		test(
			'a{ color: #000 !scheisse; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !scheiße to !important', done =>
		test(
			'a{ color: #000 !scheiße; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !verdammt to !important', done =>
		test(
			'a{ color: #000 !verdammt; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !shit to !important', done =>
		test(
			'a{ color: #000 !shit; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !kacke to !important', done =>
		test(
			'a{ color: #000 !kacke; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !jakesh to !important', done =>
		test(
			'a{ color: #000 !jakesh; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !daus to !important', done =>
		test(
			'a{ color: #000 !daus; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !antar to !important', done =>
		test(
			'a{ color: #000 !antar; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !pofuz to !important', done =>
		test(
			'a{ color: #000 !pofuz; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !lanati to !important', done =>
		test(
			'a{ color: #000 !lanati; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !lamasab to !important', done =>
		test(
			'a{ color: #000 !lamasab; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !bardamerda to !important', done =>
		test(
			'a{ color: #000 !bardamerda; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !filhodaputa to !important', done =>
		test(
			'a{ color: #000 !filhodaputa; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !demonio to !important', done =>
		test(
			'a{ color: #000 !demonio; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !satanas to !important', done =>
		test(
			'a{ color: #000 !satanas; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !desgraça to !important', done =>
		test(
			'a{ color: #000 !desgraça; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !paunocu to !important', done =>
		test(
			'a{ color: #000 !paunocu; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !feijoada to !important', done =>
		test(
			'a{ color: #000 !feijoada; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !chont to !important', done =>
		test(
			'a{ color: #000 !chont; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !fodo to !important', done =>
		test(
			'a{ color: #000 !fodo; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !fodri to !important', done =>
		test(
			'a{ color: #000 !fodri; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !zov to !important', done =>
		test(
			'a{ color: #000 !zov; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !lund to !important', done =>
		test(
			'a{ color: #000 !lund; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !lavda to !important', done =>
		test(
			'a{ color: #000 !lavda; }',
			'a{ color: #000 !important; }',
			{},
			done
		))

	it('converts !choot to !important', done =>
		test(
			'a{ color: #000 !choot; }',
			'a{ color: #000 !important; }',
			{},
			done
		))
})