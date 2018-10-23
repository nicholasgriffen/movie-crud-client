var m = require('mithril')
var Movie = require('../models/Movie')

module.exports = {
	oninit: function (vnode) {
		Movie.load(vnode.attrs.id)
	},
	view: function () {
		return m('form', {
			onsubmit: function (e) {
				e.preventDefault()
				if (m.route.get().match(/edit/)) {
					Movie.save()
					m.route.set('/show/' + Movie.current.id)
				} else {
					Movie.create()
						.then(record => {
							Movie.current.id = record.movie.id
							m.route.set('/show/' + Movie.current.id)
						})
				}
			}
		}, [
			m('label.label', 'Title'),
			m('input.input[type=text][placeholder="Title"]', {
				oninput: m.withAttr('value', function (value) {
					Movie.current.title = value
				}),
				value: Movie.current.title
			}),
			m('label.label', 'Director'),
			m('input.input[type=text][placeholder="Director"]', {
				oninput: m.withAttr('value', function (value) {
					Movie.current.director = value
				}),
				value: Movie.current.director
			}),
			m('label.label', 'Year'),
			m('input.input[type=text][placeholder="2018"]', {
				oninput: m.withAttr('value', function (value) {
					Movie.current.year = value
				}),
				value: Movie.current.year
			}),
			m('label.label', 'My Rating'),
			m('input.input[type=text][placeholder="5"]', {
				oninput: m.withAttr('value', function (value) {
					Movie.current.rating = value
				}),
				value: Movie.current.rating
			}),
			m('button.button[type=submit]', 'Save')
		])
	}
} 