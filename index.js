var postcss = require('postcss')

module.exports = postcss.plugin('postcss-caralho', (opts) => { // eslint-disable-line
	opts = opts || {}

	return (css) => {
		css.walkDecls(function transformDecl(decl) {
			if (decl.value.indexOf('!caralho') >= 0) {
				decl.value = decl.value.replace(/\s*!caralho\s*/, '')
				decl.important = true
			}
		})
	}
})
