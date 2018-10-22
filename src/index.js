var m = require('mithril')

var MovieList = require('./views/MovieList')
var MovieForm = require('./views/MovieForm')

var root = document.body

m.route(root, '/list', {
	'/list': MovieList,
	'/edit/:id': MovieForm
})