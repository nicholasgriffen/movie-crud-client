var m = require('mithril')
var Movie = require('../models/Movie')

function label(title) {
	return m('label.label', title)
}

module.exports = {
	oninit: function (vnode) {
		if (vnode.attrs.id) {
			Movie.load(vnode.attrs.id)
		} else {
			Movie.loadDefault()
		}
	},
	view: function () {
		return m('form', {
			onsubmit: function (e) {
				e.preventDefault()
				if (Movie.current.id) Movie.save()
			}
		}, [
			label('Title'),
			m('input.input[type=text][placeholder=Title]', {
				oninput: m.withAttr('value', function (value) {
					Movie.current.title = value
				}),
				value: Movie.current.title
			}),
			label('Director'),
			m('input.input[type=text][placeholder=Director]', {
				oninput: m.withAttr('value', function (value) {
					Movie.current.director = value
				}),
				value: Movie.current.director
			}),
			label('Year'),
			m('input.input[type=text][placeholder=2018]', {
				oninput: m.withAttr('value', function (value) {
					Movie.current.year = value
				}),
				value: Movie.current.year
			}),
			label('My Rating'),
			m('input.input[type=text][placeholder=5]', {
				oninput: m.withAttr('value', function (value) {
					Movie.current.rating = value
				}),
				value: Movie.current.rating
			}),
			m('button.button[type=submit]', 'Save')
		])
	}
} 