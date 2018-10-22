
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
				Movie.current = result.movie
			})
	},

	save: function () {
		return m.request({
			method: 'PUT',
			url: `${url}/${Movie.current.id}`,
			data: Movie.current,
		})
	}
}

module.exports = Movie