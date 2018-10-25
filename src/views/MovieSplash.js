var m = require('mithril')
var Movie = require('../models/Movie')

module.exports = {
	view: function (vnode) {
		var data = Movie.current
		return m('.container',
			m('.row',
				m('column',
					m('h1', data.title)
				)
			),
			m('.row',
				m('.column',
					`My Rating: ${data.rating}`
				),
				m('.column',
					`${data.director}: ${data.year}`
				)
			),
			m('.row',
				m('.column',
					m(`img[src = ${data.posterUrl || 'https://placekitten.com/g/200/300'}]`)
				)
			),
			m('.row',
				m('.column',
					m(`a.button[href = '/edit/${vnode.attrs.id}']`, { oncreate: m.route.link }, 'Edit')
				),
				m('.column',
					m(`a.button[href = '/delete/${vnode.attrs.id}']`, { oncreate: m.route.link }, 'Delete')
				)
			)
		)
	}
}