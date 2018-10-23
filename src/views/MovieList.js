// title, director, year, rating poster url
var m = require('mithril')
var Movie = require('../models/Movie')

module.exports = {
	oninit: Movie.loadList,
	view: function () {
		return m('.movie-list', Movie.list.map(movie => {
			return m('.movie-list-item', `Title: ${movie.title}, Year: ${movie.year} Director: ${movie.director}`, m(`a.danger[href='/edit/${movie.id}']`, { oncreate: m.route.link }, 'Edit'))
		}))
	}
}