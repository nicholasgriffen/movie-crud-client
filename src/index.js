var m = require('mithril')

var Movie = require('./models/Movie')
var List = require('./views/MovieList')
var Form = require('./views/MovieForm')
var Header = require('./views/Header')
var Splash = require('./views/MovieSplash')

m.route(document.body, '/', {
	'/': {
		render: function () {
			return m(Header)
		}
	},
	'/list': {
		render: function () {
			return m(Header, m(List))
		}
	},
	'/edit/:id': {
		render: function (vnode) {
			return m(Header, m(Form, vnode.attrs))
		}
	},
	'/create': {
		render: function () {
			return m(Header, m(Form))
		}
	},
	'/show/:id': {
		render: function (vnode) {
			return m(Header, m(Splash, vnode.attrs))
		}
	},
	'/delete/:id': {
		onmatch: function (vnode) {
			return Movie.delete(vnode.id)
				.then(() => {
					Movie.loadList()
					m.route.set('/list')
				})
		}
	}
})