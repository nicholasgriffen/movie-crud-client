var m = require('mithril')

function label(title) {
	return m('label.label', title)
}
module.exports = {
	view: function () {
		return m('form', [
			label('Title'),
			m('input.input[type=text][placeholder=Title]'),
			label('Director'),
			m('input.input[type=text][placeholder=Director]'),
			label('Year'),
			m('input.input[type=text][placeholder=2018]'),
			label('My Rating'),
			m('input.input[type=text][placeholder=5]'),
			m('button.button[type=button]', 'Save')
		])
	}
} 