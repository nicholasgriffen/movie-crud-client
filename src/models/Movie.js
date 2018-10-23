var url = 'http://localhost:3030/movies'
var m = require('mithril')

var Movie = {
	list: [],
	current: {},

	loadList: function () {
		return m.request({
			method: 'GET',
			url,
		})
			.then(function (result) {
				Movie.list = result.movies
			})
	},

	load: function (id) {
		return m.request({
			method: 'GET',
			url: `${url}/${id}`,
		})
			.then(function (result) {
				Movie.current = result.movie || Movie.default
			})
			.catch(() => Movie.default)
	},

	save: function () {
		return m.request({
			method: 'PUT',
			url: `${url}/${Movie.current.id}`,
			data: Movie.current,
		})
	},

	create: function () {
		return m.request({
			method: 'POST',
			url,
			data: Movie.current,
		})
	},

	get default() {
		Movie.current = {
			title: 'Title',
			director: 'Director',
			year: 2018,
			rating: 5
		}
		return Movie.current
	}
}

module.exports = Movie