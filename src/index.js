var m = require('mithril')

var MovieList = require('./views/MovieList')
var MovieForm = require('./views/MovieForm')
var Layout = require('./views/Layout')

m.route(document.body, '/list', {
	'/list': {
		render: function () {
			return m(Layout, m(MovieList))
		}
	},
	'/edit/:id': {
		render: function (vnode) {
			return m(Layout, m(MovieForm, vnode.attrs))
		}
	},
	'/create': {
		render: function () {
			return m(Layout, m(MovieForm))
		}
	}
})