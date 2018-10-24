var m = require('mithril')
var Movie = require('../models/Movie')

module.exports = {
	oninit: function (vnode) {
		if (vnode.attrs.id) {
			return Movie.load(vnode.attrs.id)
		}
		Movie.current = Movie.default
	},
	onupdate: function () {
		if (m.route.get().match(/create/)) {
			Movie.current = Movie.default
		}
		m.redraw()
	},
	view: function () {
		return m('form', {
			onsubmit: function (e) {
				e.preventDefault()
				if (m.route.get().match(/edit/)) {
					return Movie.save(Movie.current)
						.then(record => m.route.set('/show/' + record.movie.id))
				}
				return Movie.create(Movie.current)
					.then(record => m.route.set('/show/' + record.movie.id))
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
					Movie.current.year = +value
				}),
				value: Movie.current.year
			}),
			m('label.label', 'My Rating'),
			m('input.input[type=text][placeholder="5"]', {
				oninput: m.withAttr('value', function (value) {
					Movie.current.rating = +value
				}),
				value: Movie.current.rating
			}),
			m('button.button[type=submit]', 'Save')
		])
	}
} 