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

})
