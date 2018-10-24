// title, director, year, rating poster url
var m = require('mithril')
var Movie = require('../models/Movie')
module.exports = {
	oninit: Movie.loadList,

	view: function () {
		return m('table',
			m('thead',
				m('tr',
					m('th', 'Title'),
					m('th', 'Year'),
					m('th', 'Director'),
					m('th', 'Edit'),
					m('th', 'Delete')
				)),
			Movie.list.map(movie => {
				return m('tr',
					m('td', `${movie.title}`),
					m('td', `${movie.year}`),
					m('td', `${movie.director}`),
					m('td', m(`a.[href='/edit/${movie.id}']`, { oncreate: m.route.link }, 'Edit')),
					m('td', m(`a.[href='/delete/${movie.id}']`, { oncreate: m.route.link }, 'Delete'))
				)
			}))
	}
}