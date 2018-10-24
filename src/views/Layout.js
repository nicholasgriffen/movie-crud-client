var m = require('mithril')

module.exports = {
	view: function (vnode) {
		return m('main.layout', [
			m('nav.menu', [
				m('a[href="/list"]', { oncreate: m.route.link }, 'Movies'),
				m('a[href="/create"]', { oncreate: m.route.link }, 'Create')
			]),
			m('section', vnode.children)
		])
	}
}