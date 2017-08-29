var postcss = require('postcss')

const words = [
	'caralho',
	'foda-se',
	'merda',
	'desculpa',
	'putaqpariu',
	'bardamerda',
	'desisto',
	'fuckthis',
	'fuck',
	'sorry',
	'shit',
	'please',
	'scheisse',
	'scheiße',
	'verdammt',
	'kacke',
	'filhodaputa',
	'demonio',
	'satanas',
	'desgraça',
	'paunocu',
	'feijoada',
	'jakesh',
	'daus',
	'antar',
	'pofuz',
	'lanati',
	'lamasab',
	'chont',
	'fodo',
	'fodri',
	'zov',
	'lund',
	'lavda',
	'choot',
	'блять',
	'сука',
	'тварь',
	'работай',
	'чезахуйня',
	'гандон',
	'скемнебывает',
	'упс',
	'ебанина',
	'какаятоебанина'
]

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
