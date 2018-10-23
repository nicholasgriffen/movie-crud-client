var m = require('mithril')
var Movie = require('../models/Movie')

module.exports = {
	oninit: function () {
		return
	},

	view: function () {
		if (Movie.current) {
			return m('main',
				m('h1', Movie.current.title),
				m(`img[src=${Movie.current.posterUrl}]`)
			)
		} else {
			return m('h1', Movie.default.title)
		}
	}
}