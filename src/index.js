var m = require('mithril')

var Movie = require('./models/Movie')
var List = require('./views/MovieList')
var Form = require('./views/MovieForm')
var Layout = require('./views/Layout')
var Splash = require('./views/MovieSplash')

m.route(document.body, '/list', {
	'/list': {
		render: function () {
			return m(Layout, m(List))
		}
	},
	'/edit/:id': {
		render: function (vnode) {
			return m(Layout, m(Form, vnode.attrs))
		}
	},
	'/create': {
		render: function () {
			return m(Layout, m(Form))
		}
	},
	'/show/:id': {
		render: function (vnode) {
			return m(Layout, m(Splash, vnode.attrs))
		}
	},
	'/delete/:id': {
		onmatch: function (vnode) {
			Movie.delete(vnode.id)
				.then(() => m.route.set('/list'))
		}
	}
})