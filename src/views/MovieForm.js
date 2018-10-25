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
			m('label', 'Title'),
			m('input[type=text][placeholder="Title"][required]', {
				oninput: m.withAttr('value', function (value) {
					Movie.current.title = value
				}),
				value: Movie.current.title
			}),
			m('label', 'Poster URL'),
			m('input[type=text][placeholder="https://placekitten.com/g/200/300"]', {
				oninput: m.withAttr('value', function (value) {
					Movie.current.posterUrl = value
				}),
				value: Movie.current.posterUrl
			}),
			m('label', 'Director'),
			m('input[type=text][placeholder="Director"][required]', {
				oninput: m.withAttr('value', function (value) {
					Movie.current.director = value
				}),
				value: Movie.current.director
			}),
			m('label', 'Year'),
			m('input[type=number][placeholder=2018][required]', {
				oninput: m.withAttr('value', function (value) {
					Movie.current.year = value
				}),
				value: Movie.current.year
			}),
			m('label', 'My Rating'),
			m('input[type=number][placeholder=5][required]', {
				oninput: m.withAttr('value', function (value) {
					Movie.current.rating = value
				}),
				value: Movie.current.rating
			}),
			m('button[type=submit]', 'Save')
		])
	}
} 