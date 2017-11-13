/* global describe it */
const postcss = require('postcss')
const expect = require('chai').expect
const plugin = require('../')
const words = require('curse-words-common')

const test = (input, output, opts, done) => {
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
	words.forEach(word => {
		it(`converts ${word} to important`, done => {
			test(
				`a{ color: #000 !${word}; }`,
				'a{ color: #000 !important; }',
				{},
				done
			)
		})
	})
})
