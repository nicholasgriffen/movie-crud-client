var url = 'http://localhost:3030/movies'
var m = require('mithril')

var Movie = {
	list: [],
	current: {},
	default: {
		title: 'Title',
		director: 'Director',
		year: 2018,
		rating: 5
	},
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
				if (result.movie) Movie.current = result.movie
			})
			.catch(() => Movie.default)
	},

	save: function (body) {
		return m.request({
			method: 'PUT',
			url: `${url}/${body.id}`,
			data: body,
		})
	},

	create: function (body) {
		return m.request({
			method: 'POST',
			url,
			data: body,
		})
	},

	delete: function (id) {
		return m.request({
			method: 'DELETE',
			url: `${url}/${id}`
		})
	}
}

module.exports = Movie