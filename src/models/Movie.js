
/*title 
director
year
rating
poster url
*/
var url = 'http://localhost:3030/movies'
var m = require('mithril')
var Movie = {
	list: [],
	loadList: function () {
		return m.request({
			method: 'GET',
			url,
		})
			.then(function (result) {
				Movie.list = result.movies
			})
	},

	current: {},
	load: function (id) {
		return m.request({
			method: 'GET',
			url: `${url}/${id}`,
		})
			.then(function (result) {
				console.log(result)
				Movie.current = result.movie
			})
			.catch(() => Movie.loadDefault())
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

	loadDefault: function () {
		Movie.current = {
			title: 'Title',
			director: 'Director',
			year: 2018,
			rating: 5
		}
	}
}

module.exports = Movie