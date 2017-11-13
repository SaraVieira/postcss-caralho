const postcss = require('postcss')
const words = require('curse-words-common')

module.exports = postcss.plugin('postcss-caralho', () => {
	return css => {
		css.walkDecls(function transformDecl(decl) {
			words.forEach(word => {
				if (decl.value.indexOf('!' + word) >= 0) {
					const regex = new RegExp('\\s*' + '!' + word + '\\s*')
					decl.value = decl.value.replace(regex, '')
					decl.important = true
				}
			})
		})
	}
})
