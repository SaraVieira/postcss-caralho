var postcss = require('postcss')

const words = [
	'caralho',
	'foda-se',
	'merda',
	'desculpa',
	'putaqpariu',
	'desisto',
	'fuckthis',
	'fuck',
	'sorry',
	'please'
]

module.exports = postcss.plugin('postcss-caralho', (opts) => { // eslint-disable-line
	opts = opts || {}

	return (css) => {
		css.walkDecls(function transformDecl(decl) {
			words.forEach((word)=>{
				if (decl.value.indexOf('!' + word) >= 0) {
					const regex = new RegExp('\\s*' + '!' + word + '\\s*')
					decl.value = decl.value.replace(regex, '')
					decl.important = true
				}
			})
		})
	}
})
