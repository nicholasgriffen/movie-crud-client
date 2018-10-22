
/*title 
director
year
rating
poster url
*/
var url = 'http://localhost:3000/movies'
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
	}
}

module.exports = Movie