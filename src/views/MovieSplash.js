var m = require('mithril')
var Movie = require('../models/Movie')

module.exports = {
	view: function (vnode) {
		var data = Movie.current
		return m('main',
			m('h1', data.title),
			m('p', data.rating),
			m('p', data.director),
			m('p', data.year),
			m(`img[src=${data.posterUrl || 'https://placekitten.com/g/200/300'}]`),
			m(`a[href='/edit/${vnode.attrs.id}']`, { oncreate: m.route.link }, 'Edit'),
			m(`a.[href='/delete/${vnode.attrs.id}']`, { oncreate: m.route.link }, 'Delete')
		)
	}
}