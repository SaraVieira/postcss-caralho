var postcss = require('postcss')

module.exports = postcss.plugin('postcss-caralho', (opts) => { // eslint-disable-line
	opts = opts || {}

	return (css) => {
		css.walkDecls(function transformDecl(decl) {
			if (decl.value.indexOf('!caralho') >= 0) {
				decl.value = decl.value.replace(/\s*!caralho\s*/, '')
				decl.important = true
			} else if (decl.value.indexOf('!foda-se') >= 0) {
				decl.value = decl.value.replace(/\s*!foda-se\s*/, '')
				decl.important = true
			} else if (decl.value.indexOf('!merda') >= 0) {
				decl.value = decl.value.replace(/\s*!merda\s*/, '')
				decl.important = true
			} else if (decl.value.indexOf('!desculpa') >= 0) {
				decl.value = decl.value.replace(/\s*!desculpa\s*/, '')
				decl.important = true
			} else if (decl.value.indexOf('!putaqpariu') >= 0) {
				decl.value = decl.value.replace(/\s*!putaqpariu\s*/, '')
				decl.important = true
			} else if (decl.value.indexOf('!desisto') >= 0) {
				decl.value = decl.value.replace(/\s*!desisto\s*/, '')
				decl.important = true
			} else if (decl.value.indexOf('!fuckthis') >= 0) {
				decl.value = decl.value.replace(/\s*!fuckthis\s*/, '')
				decl.important = true
			} else if (decl.value.indexOf('!fuck') >= 0) {
				decl.value = decl.value.replace(/\s*!fuck\s*/, '')
				decl.important = true
			} else if (decl.value.indexOf('!sorry') >= 0) {
				decl.value = decl.value.replace(/\s*!sorry\s*/, '')
				decl.important = true
			} else if (decl.value.indexOf('!please') >= 0) {
				decl.value = decl.value.replace(/\s*!please\s*/, '')
				decl.important = true
			}
		})
	}
})
