var m = require('mithril')

var Movie = require('./models/Movie')

var Header = require('./views/Header')
var Home = require('./views/Home')
var List = require('./views/MovieList')
var Splash = require('./views/MovieSplash')
var Form = require('./views/MovieForm')


m.route(document.body, '/', {
	'/': {
		render: function () {
			return m(Header, m(Home))
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